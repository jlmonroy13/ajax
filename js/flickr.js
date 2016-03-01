$(function() {
	$('form').submit(function(event) {
		event.preventDefault();

		var searchField = $('#search');
		var searchButton = $('#submit');

		searchField.attr('disabled', true);
		searchButton.attr('disabled', true).val('Searching..');

		
		var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var tag = searchField.val();
		var flickrOptions = {
			tags: tag,
			format: "json"
		};
		function displayPhotos(data) {
			console.log(data.items);

			if(data.items.length) {
				var photoHTML = "<ul>";
				$.each( data.items, function (i, item) {
					photoHTML += '<li class="grid-25 tablet-grid-50">';
					photoHTML += '<a href='+ item.link + ' class="image" target="_blank">';
					photoHTML += '<img src='+item.media.m+'></a></li>'
				});
				photoHTML += "</ul>"
				$('#photos').html(photoHTML);
			}else {
				$('#photos').html("We don´t have any photos that matched with the tag: "+tag);
			}		

			searchField.attr('disabled', false);
			searchButton.attr('disabled', false).val('Search');
		}
		$.getJSON(flickerAPI, flickrOptions, displayPhotos);
	});
}); //end ready