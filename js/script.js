$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 150 ? $('.header').addClass('header-shadow') : $('.header').removeClass('header-shadow');
		windowTop > 150 ? $('.logoName').addClass('logoName-scroll') : $('.logoName').removeClass('logoName-scroll');
        windowTop > 150 ? $('.nav-link').addClass('nav-link-scroll') : $('.nav-link').removeClass('nav-link-scroll');
		windowTop > 150 ? $('#auth').addClass('auth-scroll') : $('#auth').removeClass('auth-scroll');
        windowTop > 150 ? $('.auth-mobile').addClass('auth-mobile-scroll') : $('.auth-mobile').removeClass('auth-mobile-scroll');
		
        windowTop > 150 ? $('.contacts').addClass('contacts-scroll') : $('.contacts').removeClass('contacts-scroll');
		// windowTop > 100 ? $('.nav').addClass('nav-scroll') : $('.nav').removeClass('nav-scroll');
        windowTop > 250 ? $('#top-second').addClass('top-second-open') : $('#top-second').removeClass('top-second-open');
	});
	
	//Click Logo To Scroll To Top
	$('#top, #top-second').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},100);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('#participant').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 50
		},100);
		e.preventDefault();
	});	

});


$(document).ready(function(){
    $('.slider').slick({
        arrows:true, 
        dots:true,
        adaptiveHeight:true,
        speed:700,
        easing:'ease',
        autoplay:false,
        autoplaySpeed:5000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        
    });
});





// mail modal
$('#mail').click(function(e){
	e.preventDefault();
	$('#modalMail').addClass('modal-open');
});
$('#closeModalMail').click(function(e){
	e.preventDefault();
	$('#modalMail').removeClass('modal-open');
});

// auth modal
$('#auth, #authHeading, #authMobile').click(function(e){
	e.preventDefault();
	$('#modalAuth').addClass('modal-open');
});
$('#close').click(function(e){
	e.preventDefault();
	$('#modalAuth').removeClass('modal-open');
});

// registration
$('#registration-open').click(function(e){
	e.preventDefault();
	$('#registration').addClass('modal-open');
});
$('#close-registration, #close-registration-second').click(function(e){
	e.preventDefault();
	$('#registration').removeClass('modal-open');
});

// forgot password
$('#login').click(function(e){
	e.preventDefault();
	$('#forgot-password').addClass('modal-open');
});
$('#close-forgot-password, #close-forgot-password-second').click(function(e){
	e.preventDefault();
	$('#forgot-password').removeClass('modal-open');
});

// open mobile menu
$('.menu-btn').click(function(e){
	e.preventDefault();
	$('.mobile-menu').slideToggle();
	$(this).toggleClass('mobile-menu-open');
});

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});

new WOW().init();