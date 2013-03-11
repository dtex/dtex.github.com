jQuery((function($) {
	$('.screenshots li').each( function( idx, item ) {
		var $item = $(item),
			name = $item.attr('rel'),
			link = $item.find('a').attr('href'),
			title = $item.find('a').html();
			
		$item.html('<img src="images/screenshots/thumb/' + name + '.png" width="215" /><br />' + title + '<div class="title"></div>');
	});
})(jQuery));