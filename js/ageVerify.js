$(document).ready(function(){

	var months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


	var dayDropdown=$("#ageVerifyOverlay .btn.day");
	var monthDropdown=$("#ageVerifyOverlay .btn.month");
	var yearDropdown=$("#ageVerifyOverlay .btn.year");

	for (var i = 1; i <= 31; i++ ){
		var newOption= $(`<option value=\"${i}\">${i}</option>`);
		dayDropdown.append(newOption);
	}

	$.each(months, function(index, value){
		var newOption= $(`<option value="${index+1}">${value}</option>`);
		monthDropdown.append(newOption);
	})

	for (var i = 1939; i <= (new Date).getFullYear(); i++){
		var newOption=$(`<option value=\"${i}\">${i}</option>`);
		yearDropdown.append(newOption);
	
	}
}) 