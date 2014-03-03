$(document).ready(function(){ 
 //INSERT CODE HERE

 //QUESTION 1
 function Dog() {
 }
 Dog.prototype.bark = function() {
 	console.log('woof');
 }
 function ShibaInu() {
 }
 ShibaInu.prototype = new Dog();
 ShibaInu.prototype.constructor = ShibaInu;
 ShibaInu.prototype.bark = function() {
 	console.log('much wow very javascript');
 }

 //QUESTION 3
$('.secondbutton').click(function() {
 $(this).css('background', '#00CED1');
 $(this).css('border-color', '#00CED1');
 $(this).parent().find('.secondheading').html('horse');
 });

 //QUESTION 4
$('#task4').click(function() {
 $(this).parent().find('#hipcat').css('-webkit-filter', 'blur(3px) sepia(.4)');
 });

 //QUESTION 5
$('#task5').click(function() {
	$('.spincar').css('-webkit-animation-name', 'drive');
	$('.spincar').css('-webkit-animation-play-state', 'running');
	$('.spincar .wheel').css('-webkit-animation-name', 'spin');
	$('.spincar .wheel').css('-webkit-animation-play-state', 'running');
 });

 //QUESTION 6
 $('.nyancat').click(function() {
  $(this).animate({left:'85%'}, 'slow');
  $(this).parent().find('.rainbows').animate({width: '78%'}, 'slow');
 });
});