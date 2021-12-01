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
		strings: ['curl "https://nels2.github.io/new-portfolio-redesign.html" --compressed'],
		stringsElement: '#typed-strings',
		showCursor: false,
		typeSpeed: 50,
		startDelay: 0,
		backSpeed: 50,
		smartBackspace: true,
		backDelay: 700,
		loop: true,
		loopCount: Infinity,
		bindInputFocusEvents: false,
		/**
   		* After each string is typed
   		* @param {number} arrayPos
   		* @param {Typed} self
   		*/
		onStringTyped: (arrayPos, self) => {},
	});
});