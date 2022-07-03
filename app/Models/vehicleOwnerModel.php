<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\appModel;
use DB;

class vehicleOwnerModel extends appModel
{
    protected $table      = 'vehiclebuydb.t_vehicle_ownerdata';
	protected $primaryKey = 'intID';
}
