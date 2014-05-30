// Foundation 5 Activate! 
$(document).foundation();


// On page load, do this
$(document).ready(function(){
  
  // Your Scripts
    
$('#fullpage').fullpage({
	anchors: ['home', 'about', 'food', 'contact'],
	scrollingSpeed: 1000,
	slidesColor: ['black', 'red', 'orange', 'yellow'],
	scrollOverflow:true,
	paddingTop: '3em',
	menu:'.sub-nav'

});






});
