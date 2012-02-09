$.fn.imageLoad = function(options) {
	
	// Loop through all elements
	return this.each(function(i, el){
		
		// Cache element
		var base = $(el);
		
		base.init = function(){
			
			// Read data attribute for high resolution image
			var highres = base.data('highres-image');
			
			// Load image
			$.get(highres, function(data){
				// Set image as source
				base.attr('src', highres);
			});
			
		};
		
		// Run initialization
		base.init();
		
	});
	
};

/*	USAGE:
	
	<img src="lowres.jpg" width="600" height="600" data-highres-image="highres.jpg" />
	
	<script>
	jQuery(function($){
		$('img').imageLoad();
	});
	</script>
*/