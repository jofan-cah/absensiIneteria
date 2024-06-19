<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
}
