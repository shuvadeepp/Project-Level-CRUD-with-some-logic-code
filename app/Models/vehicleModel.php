<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\appModel;
use DB;

class vehicleModel extends appModel
{
    protected $table      = 'vehiclebuydb.m_vehicle_name';
	protected $primaryKey = 'intVehicleID';
}
