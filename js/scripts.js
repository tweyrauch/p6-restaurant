// Foundation 5 Activate! 
$(document).foundation();


// On page load, do this
$(document).ready(function(){
  
  // Your Scripts
    
$('#fullpage').fullpage({
	anchors: ['home', 'about', 'menu', 'contact'],
	scrollingSpeed: 1000,
	slidesColor: ['black', '#D9261C', '#FFAC07', '#A5BD60'],
	scrollOverflow:true,
	fixedElements:['.largeheader'],
	menu:'.sub-nav'
});

$('a.description').click(function(){
	$(this).next().show();
});


$('a.hide').click(function(){
	$('p.food-info').hide();
});

});


// function(){
// if($(window).width()<='400px'){
// 	$('script').remove('.scroller');
// 	$('dl').removeAttr('id').addClass('accordion');
// 	$('dd').removeClass('section');
// }}