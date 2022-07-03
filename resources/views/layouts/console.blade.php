<!DOCTYPE html>
<html lang="en">


    @include('includes.doctype')

    <title> Booking Vehicle </title>


    <body>

    
        <div class="page-container">
            <!--  ====PAGE CONTAINER====  -->
            @yield('innercontent')
        </div>


        @include('includes.footer')
<script>
    /* SEARCH DROPDOWN */
    $("#vehicleData").select2({
        minimumResultsForSearch: Infinity,
        tags: true,
        minimumInputLength: 0 
    });
    
    /* DATE PICKER */
    $('.datepicker').datepicker({
        format: "dd-mm-yyyy",
        todayBtn: "linked",
        autoclose: true,
        todayHighlight: true,
    });

    /* VALIDATION */
    function validatorOwn() {
        //  alert(111); return false;
        $('.errDiv').hide();
        $('.error-input').removeClass('error-input');
        if (!blankCheck('vehicleData', 'Please Select vehicle Models'))
            return false;
        if (!blankCheck('ownerName', 'Please enter your Name'))
            return false;
        if (!blankCheck('ownerAddrs', 'Please enter your Address'))
            return false;
        if (!blankCheck('ownerPurchsDate', 'Please Select buying Date'))
            return false;
    }   

</script>
    </body>
</html>