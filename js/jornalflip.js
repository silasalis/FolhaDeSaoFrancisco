	$(window).ready(function() {
		$('#jornalflip').turn({
							display: 'single',
							acceleration: true,
							gradients: !$.isTouch,
							elevation:50,
							when: {
								turned: function(e, page) {
								}
							}
						});
	});
	
	
	$(window).bind('keydown', function(e){
		
		if (e.keyCode==37)
			$('#jornalflip').turn('previous');
		else if (e.keyCode==39)
			$('#jornalflip').turn('next');
			
	});