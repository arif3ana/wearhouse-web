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

        Category::create($category);

        return redirect()->route('dashboard.index');
    }
}
