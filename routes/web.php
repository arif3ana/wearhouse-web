<?php

use App\Http\Controllers\BarangController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\KaryawanController;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\PengirimanController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', '/login');
Route::middleware('auth')->prefix('dashboard')->name('dashboard.')->group(function () {
    Route::resource('/', DashboardController::class);
    Route::post('category', [CategoryController::class, 'store'])->name('category');
    Route::get('category', [CategoryController::class, 'create'])->name('create');
    Route::resource('karyawan', KaryawanController::class);
    Route::put('karyawan/{id}/restore', [KaryawanController::class, 'restore'])->name('karyawan.restore');
    Route::delete('karyawan/{id}/destroy_permanen', [KaryawanController::class, 'destroy_permanen'])->name('karyawan.destroy_permanen');
    Route::resource('barang', BarangController::class);
    Route::resource('pengiriman', PengirimanController::class);
    Route::get('belanja', [BarangController::class, 'belanja'])->name('belanja.index');
    Route::get('laporan', [LaporanController::class, 'index'])->name('laporan.index');
});

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
