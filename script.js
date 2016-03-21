$(document).ready(function() {
  $('.b1').click(function(){
  	$('.directions').fadeOut('slow');
  	
  });
  $('.b2').click(function(){
  	$('#pic2').fadeOut('slow');
  });
  $('.b3').click(function(){
  	$('#pic3').fadeOut('slow');
  });
  $('.b4').click(function(){
  	$('#pic4').fadeOut('slow');
  });
  $('.b5').click(function(){
  	$('#pic5').fadeOut('slow');
  	$('#HD').append("<p>Enjoy your Tacos!<br> Hover over me to see all steps again!</p>");
  	$('#HD').hover(function(){
  		location.reload();
  	});
  });
  

});

//https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/tick_green.png//