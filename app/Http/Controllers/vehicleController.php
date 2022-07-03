<?php

namespace App\Http\Controllers;

use App\Http\Controllers\AppController;
use Illuminate\Http\Request;
use app\Models\vehicleModel;
use App\Models\vehicleOwnerModel;
use Validator;
use DB;

class vehicleController extends appController
{
    //
    public function vehicleData($EncId = "") {
        // echo 111;exit;
        /* SELECT VEHICLES */
        $vehicleQuery = DB::table('m_vehicle_name')
            ->select('intVehicleID','vchVehicle_names')
            ->get();
            $this->viewVars['vehicleQuery']       = json_decode(json_encode($vehicleQuery),TRUE);
            // echo'<pre>';print_r($this->viewVars['vehicleQuery']);exit;

        /* INSERT OWNER DATA */
        if(!empty(request()->all()) && request()->isMethod('post')) {
            $requestData = request()->all();
            // echo'<pre>';print_r($requestData);exit;
            $validator   = \Validator::make($requestData, 
            [
                'vehicleData'           => 'bail|required',
                'ownerName'             => 'bail|required',
                'ownerAddrs'            => 'bail|required',
                'ownerPurchsDate'       => 'bail|required'
            ],
            [
                'vehicleData'           => 'Please Select vehicle Models',
                'ownerName'             => 'Please enter your Name',
                'ownerAddrs'            => 'Please enter your Address',
                'ownerPurchsDate'       => 'Please Select buying Date'
            ]);

            if($validator->fails()) {
                return redirect('booking')->withErrors($validator)->withInput();
            } else {
                

                if (!empty($requestData['hiddnId']) && $requestData['hiddnId'] > 0) {
                    /* UPDATE QUERY */
                    $decryp = decrypt($EncId);
                    // print_r($decryp);exit;
                    $ownerData = vehicleOwnerModel::find($decryp);

                    $ownerData->intVehicleID                 = $requestData['vehicleData'];
                    $ownerData->vchVehicle_ownerName         = $requestData['ownerName'];
                    $ownerData->vchVehicle_ownerAddress      = $requestData['ownerAddrs'];

                    $ownerData->save();

                    $getOwnerData = vehicleOwnerModel::from('t_vehicle_ownerdata')
                    ->select('vchVehicle_ownerAddress')
                    ->where([
                        ['vchPurches_date', $requestData['ownerPurchsDate']]
                    ])->get()->count();

                    // echo $getOwnerData;exit;

                    if( $getOwnerData > 0 ) {
                        /* UPDATE */
                        $ownerData = vehicleOwnerModel::find($decryp);
                        $ownerData->vchPurches_date              = $requestData['ownerPurchsDate'];
                        $ownerData->save();
                    } else {
                        /* INSERT */
                        $ownerData = new vehicleOwnerModel;

                        $ownerData->intVehicleID                 = $requestData['vehicleData'];
                        $ownerData->vchVehicle_ownerName         = $requestData['ownerName'];
                        $ownerData->vchVehicle_ownerAddress      = $requestData['ownerAddrs'];
                        $ownerData->vchPurches_date              = $requestData['ownerPurchsDate'];

                        $ownerData->save();
                    }

                } else {
                    /* INSERT */
                    $ownerData = new vehicleOwnerModel;

                    $ownerData->intVehicleID                 = $requestData['vehicleData'];
                    $ownerData->vchVehicle_ownerName         = $requestData['ownerName'];
                    $ownerData->vchVehicle_ownerAddress      = $requestData['ownerAddrs'];
                    $ownerData->vchPurches_date              = $requestData['ownerPurchsDate'];

                    $ownerData->save();

                }
            }
        }

        /* ---------------====================================-------------- */
        /* VIEW TABLE */
        $buyerInfo  = DB::table('t_vehicle_ownerdata AS VOD')
        ->select('VOD.intID','VOD.vchVehicle_ownerName','VOD.vchVehicle_ownerAddress','VOD.vchPurches_date','VN.vchVehicle_names')
        ->join('m_vehicle_name AS VN', 'VOD.intVehicleID','=','VN.intVehicleID')
        // ->orderBy('intID','DESC')
        ->get();
        $this->viewVars['buyerInfo']    = json_decode(json_encode($buyerInfo),TRUE);
        // echo'<pre>';print_r($this->viewVars['buyerInfo']);exit;


        /* ---------------====================================-------------- */

        /* EDIT OWNER DATA */
        $ownerData = vehicleOwnerModel::find($EncId);
        $QueryData = [];
        $this->viewVars['changeButtonStatus'] = 0;
            if(!empty($EncId)){
                $this->viewVars['changeButtonStatus'] = 1;
                $arrEncData = json_decode(decrypt($EncId),true);
                // echo $arrEncData;exit;
                $QueryData  =  DB::table('t_vehicle_ownerdata')->where('intID', $arrEncData)->first();

                $this->viewVars['QueryData']       = $QueryData->intVehicleID;
                // echo'<pre>';print_r($this->viewVars['QueryData']);exit;
            }
            $this->viewVars['QueryData']       = json_decode(json_encode($QueryData),TRUE);
            // echo'<pre>';print_r($this->viewVars['QueryData']);exit;


        /* ---------------====================================-------------- */
        /* DELETE OWNER DATA */    
        /* $ownerData = vehicleOwnerModel::find($EncId);
        // echo $ownerData;exit;
        $QueryData = [];   
        $arrEncData = json_decode(decrypt($EncId),true);
        // echo $arrEncData;exit;
        $QueryData = DB::table('t_vehicle_ownerdata')->where('intID', $arrEncData)->update(['deletedFlag'=> 1]);  */



        return view('applications.booking', $this->viewVars);
    }
}
