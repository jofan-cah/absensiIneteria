<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Validation\Validator;

class UsersController extends Controller
{
    //
    public function index()
    {
        $users = User::paginate(10);

        // dd($users);
        return Inertia::render('Users/Index', compact('users'));
    }

    public function create()
    {
        return Inertia::render('Users/Create');
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $data = request()->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
            'password_confirmation' => 'required',
            'role' => 'required',
        ]);


        User::create($data);
        return redirect()->route('users')->with('success', 'User created successfully.');
    }

    public function edit($id)
    {
        $users = User::findOrFail($id);

        return Inertia::render('Users/Edit', compact('users'));
    }


    public function update(Request $request, $id)
    {
        $users = User::findOrFail($id);
        $data = request()->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . $users->id,
            'password' => 'nullable|confirmed',
            'password_confirmation' => 'nullable',
            'role' => 'required',
        ]);
        if (empty($data['password'])) {
            unset($data['password']);
        }

        $users->update($data);
        return redirect()->route('users')->with('success', 'User updated successfully.');
    }

    public function delete($id)
    {
        $users = User::findOrFail($id);
        $users->delete();
        return redirect()->route('users')->with('success', 'User deleted successfully.');
    }
}
