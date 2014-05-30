// Foundation 5 Activate! 
$(document).foundation();


// On page load, do this
$(document).ready(function(){
  
  // Your Scripts
    
$('#fullpage').fullpage({
	anchors: ['home', 'about', 'food', 'contact'],
	scrollingSpeed: 1000,
	slidesColor: ['black', '#D9261C', '#FFAC07', '#A5BD60'],
	scrollOverflow:true,
	paddingTop: '3em',
	menu:'.sub-nav'

});
});


$(window).resize(function(){
if($(window).width()<=320){
	$('.scroller').remove();
	$('dl').removeAttr('id').addClass('accordion');
	$('dd').removeClass('section');
}
});