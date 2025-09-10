<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DataController extends Controller
{
    public function getData()
    {
        $data = DB::table('MTRUCKTYPE_TBL')->get(); // Replace 'your_table_name' with your actual table name

        return response()->json($data);
    }
}
