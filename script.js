document.addEventListener("DOMContentLoaded", function(event) { 
  var phrases = [
	'All human beings have unlimited potential, unlimited capacity, unlimited creative energy',
	'If you have guns at home, destroy them',
	'Share your work',
	'Learn about feminism',
	'Respect the other',
	'Information should be open',
	'Everybody is responsible for the environment',
	'Our cities needs to function as integral parts of nature',
	'Think communally',
	'People who wants to change things must keep pushing for change',
	'If you make consistent, gradual changes, they can add up to something enormous',
	'This is not Planet Earth, but Planet Ocean',
	'Protecting the nature is not all about animals and plants, but protecting the ecosystem services',
  ];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var lastPosition = 0;

  document.querySelector("#phrase").innerHTML = phrases[lastPosition];

  setInterval(function(){
  	document.querySelector("#phrase").className = "effect";

  	var newPosition = getRandomInt(0, phrases.length - 1);
  	
  	if (lastPosition === newPosition) {
  		document.querySelector("#phrase").innerHTML = phrases[getRandomInt(0, phrases.length - 1)];
  	} else {
  		document.querySelector("#phrase").innerHTML = phrases[newPosition];
  	}
  }, 7000);
});