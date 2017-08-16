// Code created for the JOMO, Inc. website. Designed by Ryan Payne, code written by Jeff Berlin

// Opens all links in a new tab
var links =  document.links;
for (var i = 0; i < links.length; i++) {
	links[i].target = "_blank";
}

// Handles phone number input
function phoneFormat(input) {
	input = input.replace(/\D/g, '');
	input = input.substring(0,10);
	var size = input.length;
	if(size == 0) {
		input = input;
	} else if(size < 3) {
		input = '(' + input;
	} else if(size < 7) {
		input = '(' + input.substring(0,3) + ') ' + input.substring(3,6);
	} else {
		input = '(' + input.substring(0,3) + ') ' + input.substring(3,6) + ' - ' + input.substring(6,10);
	}
	return input;
}

document.getElementById('phone').addEventListener('keyup', function(evt){
	var phone = document.getElementById('phone');
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	phone.value = phoneFormat(phone.value);
})