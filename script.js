
$( document ).ready(function() {
    console.log( "ready!" );
    $("#input_9").val(localStorage.getItem("9am"));
    $("#input_10").val(localStorage.getItem("10am"));
    $("#input_11").val(localStorage.getItem("11am"));
    $("#input_12").val(localStorage.getItem("12pm"));
    $("#input_1").val(localStorage.getItem("1pm"));
    $("#input_2").val(localStorage.getItem("2pm"));
    $("#input_3").val(localStorage.getItem("3pm"));
    $("#input_4").val(localStorage.getItem("4pm"));
    $("#input_5").val(localStorage.getItem("5pm"));
    


    $(".event").on("click",function(){
    //alert ("hi");

    });

    $(".save_button").on("click",function(){
        //just save them all
        console.log($("#input_9"));
        console.log($("#input_9").val());
        localStorage.setItem("9am",$("#input_9").val());
        localStorage.setItem("10am",$("#input_10").val());
        localStorage.setItem("11am",$("#input_11").val());
        localStorage.setItem("12pm",$("#input_12").val());
        localStorage.setItem("1pm",$("#input_1").val());
        localStorage.setItem("2pm",$("#input_2").val());
        localStorage.setItem("3pm",$("#input_3").val());
        localStorage.setItem("4pm",$("#input_4").val());
        localStorage.setItem("5pm",$("#input_5").val());

    });

});