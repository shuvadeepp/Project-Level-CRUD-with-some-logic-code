
@extends('layouts.console')
@section('innercontent')


<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">

<br><br>
    <h4> Vehicle Buy Data Form  </h4>
    <hr>
            <!-- FORM -->

            <form method="POST">
                @csrf
                <input type="hidden" name="hiddnId" id="hiddnId" value="{{ (isset($QueryData['intID']) && $QueryData['intID'] != '') ? $QueryData['intID']: '' }}">
                <div class="mb-3">
                    <label for="vehicleData" class="form-label"> Vahicle's:- </label>
                    <select name="vehicleData" id="vehicleData" class="form-control" style="width: 250px;">
                        <option value="#">--Select--</option>
                        <?php //echo $QueryData['intVehicleID'];exit;?>
                        @foreach($vehicleQuery as $vehicleData)
                            <option {{(isset($QueryData['intVehicleID']) && $QueryData['intVehicleID'] == $vehicleData['intVehicleID'])?'selected':''}} value="{{ $vehicleData['intVehicleID'] }}"> {{ $vehicleData['vchVehicle_names'] }} </option>
                        @endforeach
                    </select>
                    <span class="errMsg_vehicleData errDiv" style="color: red;"></span>
                </div>
                <div class="mb-3">
                    <label for="ownerName" class="form-label"> Vahicle Owner Name:- </label>
                    <input type="text" class="form-control" name="ownerName" id="ownerName" value="{{ (isset($QueryData['vchVehicle_ownerName']) && $QueryData['vchVehicle_ownerName'] != '') ? $QueryData['vchVehicle_ownerName']: '' }}">
                    <span class="errMsg_ownerName errDiv" style="color: red;"></span>
                </div>
                <div class="mb-3">
                    <label for="ownerAddrs" class="form-label"> Vahicle Owner Address:- </label>
                    <input type="text" class="form-control" name="ownerAddrs" id="ownerAddrs" value="{{ (isset($QueryData['vchVehicle_ownerAddress']) && $QueryData['vchVehicle_ownerAddress'] != '') ? $QueryData['vchVehicle_ownerAddress']: '' }}">
                    <span class="errMsg_ownerAddrs errDiv" style="color: red;"></span>
                </div>
                <div class="mb-3">
                    <div class="input-group date datepicker" style="width: 350px;">
                        <label for="ownerPurchsDate" class="form-label"> Vahicle Purches Date:- </label>
                        <span class="input-group-addon"> <i class="bi bi-calendar-date-fill"></i> </span>
                        <input type="text" class="form-control" name="ownerPurchsDate" id="ownerPurchsDate" placeholder="Select Date" value="{{ (isset($QueryData['vchPurches_date']) && $QueryData['vchPurches_date'] != '') ? $QueryData['vchPurches_date']: '' }}">
                        <span class="errMsg_ownerPurchsDate errDiv" style="color: red;"></span>
                    </div>
                </div>
                <div class="mb-3">
                    <input type="submit" class="btn btn-success" value="{{ $changeButtonStatus == 1 ?'UPDATE':'BUY' }}" onclick="return validatorOwn()">
                        @if ($changeButtonStatus == 1)
                            <a href="{{ url('vehicle/vehicleData/') }}" class="btn btn-danger" > Cancel </a>
                        @else
                            <input type="Reset" class="btn btn-danger" value="Reset">
                        @endif
                </div>
            </form>
            <!-- FORM -->
            <!-- ---------------====================================================---------------- -->
            <!-- TABLE -->
                <table class="table table-bordered border-primary">
                    <thead>
                        <tr>
                        <th scope="col">Sl#</th>
                        <th scope="col">Owner Name</th>
                        <th scope="col">Owner Address</th>
                        <th scope="col">Owner Purches Date</th>
                        <th scope="col">Vehicle Model</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    @php
                        $count = 1;
                    @endphp
                    @if(!empty($buyerInfo))
                    @foreach($buyerInfo  as $buyerData)

                        <?php 
                            $arrParam   = [];
                            $arrParam   = $buyerData['intID'];
                            // echo $arrParam;exit;
                            $strParam   = encrypt(json_encode($arrParam)); 
                            $strEnc = str_replace('=','',$strParam);     
                            // echo $strEnc;exit;
                        ?>
                    
                        <tr>
                            <td>{{ $count }}</td>
                            <td>{{ $buyerData['vchVehicle_ownerName'] }}</td>
                            <td>{{ $buyerData['vchVehicle_ownerAddress'] }}</td>
                            <td>{{ $buyerData['vchPurches_date'] }}</td>
                            <td>{{ $buyerData['vchVehicle_names'] }}</td>
                            <td>
                                <a href="{{ url('vehicle/vehicleData/' . $strParam) }}" class="btn btn-warning"> <i class="bi bi-pencil-square"></i> </a>
                                <a href="{{ url('vehicle/vehicleData/' . $strParam) }}" class="btn btn-danger"> <i class="bi bi-trash3-fill"></i> </a>
                            </td>
                        </tr>
                        @php
                    $count++;
                    @endphp
                    @endforeach
                    @else
                    <tr>
                        <td colspan="6" align="center" style="color: red; font-weight: bold;"> No Record Found </td>
                    </tr>
                    @endif
                    </tbody>
                </table>
            <!-- TABLE -->
            <!-- ---------------====================================================---------------- -->

        </div>
    </div>
</div>
@endsection