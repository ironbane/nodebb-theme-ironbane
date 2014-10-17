$('document').ready(function() {
	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	$('body').css('background-image', 'url(/plugins/nodebb-theme-ironbane/images/bg/' + getRandomInt(1, 5) + '.jpg)');
});