$(document).ready(function() {

  $.get("/api/tables", function(data, status) {

    var reservation = data;

    // var reservation = [];
    // for (var i in data){
    // 	reservation.push(data[i]);
    // }

    // Looping through the array and creating a new
    // div that will append it to the Tabledata ID
    // for each customer

    for (var i = 0; i < reservation.length; i++){

			var well = $("<div>")
    		.addClass("card-block tables")
    		.html("<span class=''>"+ (i+1) +"</span>"+ reservation[i].customerName);

    	$("#tabledata").append(well);

    }

    $.get("/api/waitlist", function(data2, status2) {

      // var waitinglist = [];
      var waitinglist = data2;

      // for (var j in data2) {
      //   waitinglist.push(data2[j]);
      // }

      for (var j = 0; j < waitinglist.length; j++) {
        var well = $("<div>")
        	.addClass("card-block tables")
        	.html(waitinglist[j].customerName);
        $("#waitinglist").append(well);
      }

    });

  });
});
