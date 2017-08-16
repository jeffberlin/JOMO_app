// Code created for the JOMO, Inc. website. Designed by Ryan Payne, code written by Jeff Berlin

// Branch code for sending the SMS
(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode banner closeBanner creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode".split(" "), 0);
branch.init('key_test_djAFXqGoN9vI70AOXY5VlcefztgADlwt');
            function sendSMS(form) {
                var phone = form.phone.value;
                var linkData = {
                    tags: [],
                    channel: 'Website',
                    feature: 'TextMeTheApp',
                    data: {
                    }
                };
                var options = {};
                var callback = function(err, result) {
                    if (err) {
                        alert("Sorry, something went wrong.");
                    }
                    else {
                        alert("Check your phone for our text!");
                    }
                };
                branch.sendSMS(phone, linkData, options, callback);
                form.phone.value = "";
            }

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
	var phoneNumber = document.getElementById('phone');
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	phoneNumber.value = phoneFormat(phoneNumber.value);
})

