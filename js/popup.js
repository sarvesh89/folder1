var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

$( ".btn1" ).on( "click", function() {
  checkEmail();
});
$( ".btn2" ).on( "click", function() {
 // chekcPhone();
});

function checkEmail() {
  var email_address = $("#email");

  var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i;
  if (!email_regex.test(email_address.val())) {
    if (email_address != '') {
      $("#emailerror").show();
      return false;
    }
  } else {
    $("#emailerror").hide();
	   $("#email_footer,#email_body, #email_heading").hide();
	   
	 $("#mobile_footer,#mobile_body, #mobile_heading").show(); 
	 $(".greenBox").removeClass("greenBox").addClass("blueBox");
 		

	   
  }
}

function chekcPhone() {
  var mobile = $("#phone");
  var mob_regex = /^\d{10}$/;
  if (!mob_regex.test(mobile.val())) {
    if (mobile != '') {
      $("#phoneError").show();

      return false;

    }
  } else {
    $("#phoneError").hide();

  }
}
