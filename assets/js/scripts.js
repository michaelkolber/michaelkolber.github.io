$(function() {

// Sticky Menu
window.onscroll = function() {checkScroll();};
var header = document.getElementById('nav');
var offset = header.offsetTop;

function checkScroll() {
    if (window.pageYOffset > offset) {
        header.classList.add('nav--sticky');
    } else {
        header.classList.remove('nav--sticky');
    }
}


// Abort redirect on form submit
$('#contact-form').on('submit', function(e) {
   e.preventDefault();
   $.ajax({
       url: $(this).attr('action'),
       type: 'POST',
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
