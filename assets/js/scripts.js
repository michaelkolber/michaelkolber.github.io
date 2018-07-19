$(function() {

  //=====================//
 //==== Sticky Menu ====//
//=====================//
var header = document.getElementById('nav');
var offset = header.offsetTop;

function checkScroll() {
    if (window.pageYOffset > offset) {
        header.classList.add('nav--sticky');
    } else {
        header.classList.remove('nav--sticky');
    }
}

$(window).scroll(checkScroll); // Add an event listener
checkScroll(); // Execute on page load in case the user loads on the middle of the page

// Re-adjust the offset when the user zooms or resizes the window
$(window).resize(function() {
    header.classList.remove('nav--sticky');
    offset = header.offsetTop;
    checkScroll();
});


  //===================================//
 //== Abort redirect on form submit ==//
//===================================//
$('#contact-form').on('submit', function(e) {
   e.preventDefault();
   $.post({
       url: $(this).attr('action'),
       data: $(this).serialize(),
       beforeSend: function() {
           $('#contact-form__submit').val('Sending...');
       },
       success: function(data) {
           // $('.contact-form__overlay').addClass('contact-form__overlay--visible');
           $('#contact-form__submit').val('Sent!');
           $('#contact-form').each(function(){
                this.reset();
            });
       }
   });
});

});
