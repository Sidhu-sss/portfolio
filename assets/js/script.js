// AOS
AOS.init();

/* scroll bar */
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 0);
});


/* carousel */
$(document).ready(function(){
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	  loop:true,
	  margin:10,
	  nav:false,
	  items: 1,
	  autoplay:true,
	  autoplayTimeout:3000,
	  autoplayHoverPause:true,
	});
  });

/* toggle */
document.addEventListener("DOMContentLoaded", function(){
	window.addEventListener('scroll', function() {
		if (window.scrollY > 0) {
		  document.getElementById('navbar_top').classList.add('fixed-top');
		  // add padding top to show content behind navbar
		//   document.getElementById('navbar_top').style.transition = ".2s";
		  navbar_height = document.querySelector('.navbar').offsetHeight;
		  document.body.style.paddingTop = navbar_height + 'px';
		} else {
		  document.getElementById('navbar_top').classList.remove('fixed-top');
		   // remove padding top from body
		  document.body.style.paddingTop = '0';
		} 
	});
  });
  
  /* active */
  navbar = document.querySelector(".navbar-collapse").querySelectorAll("a");
//   console.log(navbar);
  navbar.forEach(element =>{
	element.addEventListener("click",function(){
		navbar.forEach(nav =>nav.classList.remove("active"))
		this.classList.add("active");
	})
  })


