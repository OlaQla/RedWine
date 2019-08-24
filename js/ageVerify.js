$(document).ready(function(){

	var months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


	var dayDropdown=$("#ageVerifyOverlay .btn.day");
	var monthDropdown=$("#ageVerifyOverlay .btn.month");
	var yearDropdown=$("#ageVerifyOverlay .btn.year");
	var wrongInputText=$("#ageVerifyOverlay .wrongInput");

	for (var i = 1; i <= 31; i++ ){
		var newOption= $(`<option value=\"${i}\">${i}</option>`);
		dayDropdown.append(newOption);
	}

	$.each(months, function(index, value){
		var newOption= $(`<option value="${index}">${value}</option>`);
		monthDropdown.append(newOption);
	})

	for (var i = 1939; i <= (new Date).getFullYear(); i++){
		var newOption=$(`<option value=\"${i}\">${i}</option>`);
		yearDropdown.append(newOption);
	}

	$(".submit.btn").click(function(event){
		event.preventDefault();
		wrongInputText.hide();
		var dayValue = parseInt(dayDropdown.val());
		var monthValue = parseInt(monthDropdown.val());
		var yearValue = parseInt(yearDropdown.val());
		
		if (dayValue === 0 || monthValue === 12 || yearValue === 0){
			wrongInputText.show();
		} else{
			var dateValue = new Date(yearValue+18, monthValue, dayValue);
			var currentDate = new Date();
			var isOldEnough = dateValue.getTime() <= currentDate.getTime();

			if (isOldEnough){
				$("#ageVerifyOverlay").hide();
			} else {
				$(".tooYoung").show();
				$(".wrapAgeVerify").hide();
				var daysTo18 = Math.floor((dateValue - currentDate)/86400000);
				$(".daysTo18").text(daysTo18);
			}
		}
	})

}) 
