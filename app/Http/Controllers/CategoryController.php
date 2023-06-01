<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function create() {
        return inertia('Dashboard/CreateCategory');
    }

    public function store(Request $request) {
        $category = $request->validate([
            'name' => 'required|unique:categories',
        ]);
        $category['user_id'] = auth()->user()->id;

        Category::create($category);

        return redirect()->route('dashboard.index')->with([
            'message' => 'Category baru berhasil di tambahkan!!',
            'type' => 'success'
        ]);
    }
}
