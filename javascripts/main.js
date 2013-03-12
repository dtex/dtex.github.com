jQuery((function($) {
	$('.screenshots li').each( function( idx, item ) {
		var $item = $(item),
			name = $item.attr('rel'),
			link = $item.find('a').attr('href'),
			title = $item.find('a').html();
			
		$item.html('<a href="' + link + '"><img src="images/screenshots/thumb/' + name + '.png" width="215" /></a><br /><div class="title"><a href="' + link + '">' + title + '</a></div>');
	});
})(jQuery));