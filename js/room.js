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
		showCursor: false,
		typeSpeed: 0,
		startDelay: 0,
		fadeOut: true,
  		fadeOutClass: 'typed-fade-out',
  		fadeOutDelay: 10000,
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