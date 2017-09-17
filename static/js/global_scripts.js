$(function(){
$('#sumColumnEWTGroup').hide();

$('#btnClearAll').on('click', function(){
    console.log("Clearing....")
    $.ajax({
        url: "/clear_session/",
        method: 'GET', // or another (GET), whatever you need
        data: {
            "clear_all": 1 // data you need to pass to your function
        },
        success: function (data) {
            console.log("Cleared !!");
            window.location.href='/global/';

        }
    });
});

$('#btnSaveAll').on('click', function(){
    console.log("Saving....");
    some_random = Math.floor((Math.random() * 100000000) + 1);
    $.ajax({
        url: "/save_session/",
        method: 'GET', // or another (GET), whatever you need
        data: {
            "name": "untitled-"+some_random // data you need to pass to your function
        },
        success: function (data) {
            console.log("Saved !!");
            window.location.href='/list_plots/';
        }
    });
});


$('#aggregationTypeEWT').on('change',(function() {
            if($('#aggregationTypeEWT option:selected').val()==='SUM')
            {
            $('.sumColumnEWTGroup').show();
            }
            else
            {
            $('#sumColumnEWTGroup').hide();
            }
        }
        ));


});