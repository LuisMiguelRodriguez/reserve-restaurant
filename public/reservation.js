$(document).ready(function(){
	$("#submit").on("click", function(event){
		event.preventDefault();

		var name = $("#name").val().trim();
		var phoneNum = $("#phonenumber").val().trim();
		var email = $("#email").val().trim();
		var uniqueID = $("#uniqueid").val().trim();

		var person = {
			customerName : name,
			phonenumber: phoneNum,
			customerEmail: email,
			customerID: uniqueID
		};

		$.get("/api/tables", function(data,status){
			if (data.length <= 5){
				$.post("/api/tables",person)
			} else {

				$.get("/api/waitlist",function(data2,status2){
					if (data2.length === 10){
						alert("Waitinglist is full.");
					}else{
						$.post("/api/waitinglist",person);
					}
				});
			}


		});

		$("#name").val("");
		$("#phonenumber").val("");
		$("#email").val("");
		$("#uniqueid").val("");
	});

});
