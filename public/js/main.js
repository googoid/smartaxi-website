jQuery( document ).ready(function( $ ) {
	var imgs = ['./images/2k.jpg', './images/fhd.jpg', './images/logo.png', './images/btn_apple.png', './images/btn_google.png'];

	$('body').plainOverlay('show', {duration: 400, fillColor:'#251a36', opacity:'0.9', progress:false});

	var loaded = 0;
	$.each(imgs, function(i, img_src){
		var hd_bg = new Image();
		hd_bg.onload = function() {
			loaded++;
			checkLoaded();
		};
		hd_bg.src = img_src;
	});

	var checkLoaded = function() {
		if ( loaded == imgs.length ) {			
			$('body').plainOverlay('hide');
		}
	};
});