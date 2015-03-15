jQuery( document ).ready(function( $ ) {
	var imgs = ['./images/2k.jpg', './images/fhd.jpg', './images/logo.png', './images/btn_apple.png', './images/btn_google.png'];

	$('body').plainOverlay('show', {duration: 150, fillColor:'#251a36', opacity:'0.9', progress:function(){ return $('<div id="followingBallsG"><div id="followingBallsG_1" class="followingBallsG"></div><div id="followingBallsG_2" class="followingBallsG"></div><div id="followingBallsG_3" class="followingBallsG"></div><div id="followingBallsG_4" class="followingBallsG"></div>');} });

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