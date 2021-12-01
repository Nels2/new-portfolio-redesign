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
		loopCount: Infinity,
		showCursor: false,
		typeSpeed: 35,
		backSpeed: 35,
		startDelay: 5,
		backDelay: 25000,
		/**
   		* After each string is typed
   		* @param {number} arrayPos
   		* @param {Typed} self
   		*/
		onStringTyped: (arrayPos, self) => {},
	});
});