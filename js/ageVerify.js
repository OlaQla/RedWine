

$(document).ready(function () {
	var cookieVal = $.cookie("minDate"); // get existing cookie
	
	if (cookieVal) { // check if cookie existed
		var dateValue = new Date(cookieVal); // create date object from cookie value
		var currentDate = new Date(); // get current date
		var isOldEnough = dateValue.getTime() <= currentDate.getTime(); // check if maturity value previously set is in the past

		if (isOldEnough) { 
			return; // don't show overlay if user is old enought
		} else { 
			//show overlay with info when user can access site
			$("#ageVerifyOverlay").show(); 
			$(".tooYoung").show();
			$(".wrapAgeVerify").hide();
			var daysTo18 = Math.floor((dateValue - currentDate) / 86400000);// 8640000 is number of milliseconds in a day
			$(".daysTo18").text(daysTo18);
			return;
		}
	} else {
		// the cookie is not set so showing age verify overlay
		$("#ageVerifyOverlay").show();
		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


		var dayDropdown = $("#ageVerifyOverlay .btn.day");
		var monthDropdown = $("#ageVerifyOverlay .btn.month");
		var yearDropdown = $("#ageVerifyOverlay .btn.year");
		var wrongInputText = $("#ageVerifyOverlay .wrongInput");
		
		// fill in days dropdown
		for (var i = 1; i <= 31; i++) {
			var newOption = $(`<option value=\"${i}\">${i}</option>`);
			dayDropdown.append(newOption);
		}
		// fill in months dropdown
		$.each(months, function (index, value) {
			var newOption = $(`<option value="${index}">${value}</option>`);
			monthDropdown.append(newOption);
		});
		// fill in years dropdown	
		for (var i = 1939; i <= (new Date).getFullYear(); i++) {
			var newOption = $(`<option value=\"${i}\">${i}</option>`);
			yearDropdown.append(newOption);
		}

		$(".submit.btn").click(function (event) {
			event.preventDefault();
			wrongInputText.hide();
			var dayValue = parseInt(dayDropdown.val());
			var monthValue = parseInt(monthDropdown.val());
			var yearValue = parseInt(yearDropdown.val());
			
			// check if any input has incorrect value
			if (dayValue === 0 || monthValue === 12 || yearValue === 0) {
				wrongInputText.show();
			} else {
				// date value is a date when the user will be mature
				var dateValue = new Date(yearValue + 18, monthValue, dayValue);
				var currentDate = new Date();
				var isOldEnough = dateValue.getTime() <= currentDate.getTime();
				$.cookie("minDate", dateValue); // set cookie with calculated maturity date
				if (isOldEnough) {
					$("#ageVerifyOverlay").hide();
				} else {
					//show overlay with info when user can access site
					$(".tooYoung").show();
					$(".wrapAgeVerify").hide();
					var daysTo18 = Math.floor((dateValue - currentDate) / 86400000);
					$(".daysTo18").text(daysTo18);
				}
			}
		});
	}
});
