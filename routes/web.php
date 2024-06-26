<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsersController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'admin'])->group(function () {
    Route::prefix('users')->group(function () {
        Route::get('/', [UsersController::class, 'index'])->name('users');
        Route::get('/create', [UsersController::class, 'create'])->name('users.create');
        Route::get('/edit/{id}', [UsersController::class, 'edit'])->name('users.edit');
        Route::post('/', [UsersController::class, 'store'])->name('users.post');
        Route::patch('/{id}', [UsersController::class, 'update'])->name('users.update');
        Route::delete('/{id}', [UsersController::class, 'delete'])->name('users.destroy');
    });
});
Route::middleware(['auth'])->group(function () {
    Route::prefix('absensi')->group(function () {
        Route::get('/', [UsersController::class, 'index'])->name('absensi');
        Route::patch('/{id}', [UsersController::class, 'update'])->name('absensi.update');
        Route::delete('/{id}', [UsersController::class, 'destroy'])->name('absensi.destroy');
    });
});

Route::middleware('auth')->group(function () {
    Route::prefix('subscription')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
});

require __DIR__ . '/auth.php';
