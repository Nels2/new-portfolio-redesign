$(document).ready(function () {
	$('#message').on('keydown', function (e) {
		if (e.key === 'Enter') {
			if ($('.app').data('page') === '') {
				console.log('true');
				window.location.href += '/' + $('#message').val();
			} else {
				window.location.href += $('#message').val();
			}
		}
	});

	var typed = new Typed('#typed', {
		stringsElement: '#typed-strings',
		loop: true,
		loopCount: 10,
		showCursor: false,
		typeSpeed: 50,
		backSpeed: 50,
		backDelay: 30,
	});
});