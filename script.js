$(document).ready(function() {
  console.log("ready!");
  $("#input_9").val(localStorage.getItem("9am"));
  $("#input_10").val(localStorage.getItem("10am"));
  $("#input_11").val(localStorage.getItem("11am"));
  $("#input_12").val(localStorage.getItem("12pm"));
  $("#input_1").val(localStorage.getItem("1pm"));
  $("#input_2").val(localStorage.getItem("2pm"));
  $("#input_3").val(localStorage.getItem("3pm"));
  $("#input_4").val(localStorage.getItem("4pm"));
  $("#input_5").val(localStorage.getItem("5pm"));

  
  var my_time = moment().format("LT");
  //my_time = "12:45 AM";
  var my_hour = my_time.split(":");

  console.log(my_hour);

  switch (my_hour[0]) {
    case "9":
      $("#input_9").css("background-color", "red");
      $("#input_10").css("background-color", "lightgreen");
      $("#input_11").css("background-color", "lightgreen");
      $("#input_12").css("background-color", "lightgreen");
      $("#input_1").css("background-color", "lightgreen");
      $("#input_2").css("background-color", "lightgreen");
      $("#input_3").css("background-color", "lightgreen");
      $("#input_4").css("background-color", "lightgreen");
      $("#input_5").css("background-color", "lightgreen");

      break;
    case "10":
      $("#input_9").css("background-color", "lightgray");
      $("#input_10").css("background-color", "red");
      $("#input_11").css("background-color", "lightgreen");
      $("#input_12").css("background-color", "lightgreen");
      $("#input_1").css("background-color", "lightgreen");
      $("#input_2").css("background-color", "lightgreen");
      $("#input_3").css("background-color", "lightgreen");
      $("#input_4").css("background-color", "lightgreen");
      $("#input_5").css("background-color", "lightgreen");
      break;
    case "11":
      $("#input_9").css("background-color", "lightgray");
      $("#input_10").css("background-color", "lightgray");
      $("#input_11").css("background-color", "red");
      $("#input_12").css("background-color", "lightgreen");
      $("#input_1").css("background-color", "lightgreen");
      $("#input_2").css("background-color", "lightgreen");
      $("#input_3").css("background-color", "lightgreen");
      $("#input_4").css("background-color", "lightgreen");
      $("#input_5").css("background-color", "lightgreen");
      break;
    case "12":
      $("#input_9").css("background-color", "lightgray");
      $("#input_10").css("background-color", "lightgray");
      $("#input_11").css("background-color", "lightgray");
      $("#input_12").css("background-color", "red");
      $("#input_1").css("background-color", "lightgreen");
      $("#input_2").css("background-color", "lightgreen");
      $("#input_3").css("background-color", "lightgreen");
      $("#input_4").css("background-color", "lightgreen");
      $("#input_5").css("background-color", "lightgreen");
      break;
    case "1":
      $("#input_9").css("background-color", "lightgray");
      $("#input_10").css("background-color", "lightgray");
      $("#input_11").css("background-color", "lightgray");
      $("#input_12").css("background-color", "lightgray");
      $("#input_1").css("background-color", "red");
      $("#input_2").css("background-color", "lightgreen");
      $("#input_3").css("background-color", "lightgreen");
      $("#input_4").css("background-color", "lightgreen");
      $("#input_5").css("background-color", "lightgreen");
      break;
    case "2":
      $("#input_9").css("background-color", "lightgray");
      $("#input_10").css("background-color", "lightgray");
      $("#input_11").css("background-color", "lightgray");
      $("#input_12").css("background-color", "lightgray");
      $("#input_1").css("background-color", "lightgray");
      $("#input_2").css("background-color", "red");
      $("#input_3").css("background-color", "lightgreen");
      $("#input_4").css("background-color", "lightgreen");
      $("#input_5").css("background-color", "lightgreen");
      break;
    case "3":
      $("#input_9").css("background-color", "lightgray");
      $("#input_10").css("background-color", "lightgray");
      $("#input_11").css("background-color", "lightgray");
      $("#input_12").css("background-color", "lightgray");
      $("#input_1").css("background-color", "lightgray");
      $("#input_2").css("background-color", "lightgray");
      $("#input_3").css("background-color", "red");
      $("#input_4").css("background-color", "lightgreen");
      $("#input_5").css("background-color", "lightgreen");
      break;
    case "4":
      $("#input_9").css("background-color", "lightgray");
      $("#input_10").css("background-color", "lightgray");
      $("#input_11").css("background-color", "lightgray");
      $("#input_12").css("background-color", "lightgray");
      $("#input_1").css("background-color", "lightgray");
      $("#input_2").css("background-color", "lightgray");
      $("#input_3").css("background-color", "lightgray");
      $("#input_4").css("background-color", "red");
      $("#input_5").css("background-color", "lightgreen");
      break;
    case "5":
      $("#input_9").css("background-color", "lightgray");
      $("#input_10").css("background-color", "lightgray");
      $("#input_11").css("background-color", "lightgray");
      $("#input_12").css("background-color", "lightgray");
      $("#input_1").css("background-color", "lightgray");
      $("#input_2").css("background-color", "lightgray");
      $("#input_3").css("background-color", "lightgray");
      $("#input_4").css("background-color", "lightgray");
      $("#input_5").css("background-color", "red");
      break;
    default:
    // code block
  }

  $("#todays_date").text(moment().format("LL"));

  $(".event").on("click", function() {
    //alert ("hi");
  });

  $(".save_button").on("click", function() {
    //just save them all
    console.log($("#input_9"));
    console.log($("#input_9").val());
    localStorage.setItem("9am", $("#input_9").val());
    localStorage.setItem("10am", $("#input_10").val());
    localStorage.setItem("11am", $("#input_11").val());
    localStorage.setItem("12pm", $("#input_12").val());
    localStorage.setItem("1pm", $("#input_1").val());
    localStorage.setItem("2pm", $("#input_2").val());
    localStorage.setItem("3pm", $("#input_3").val());
    localStorage.setItem("4pm", $("#input_4").val());
    localStorage.setItem("5pm", $("#input_5").val());
  });
});
