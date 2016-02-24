$(function() {
	$('button').click(function() {
		$("button").removeClass("selected");
		$(this).addClass("selected");
		var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var animal = $(this).text();
		var flickrOptions = {
			tags: animal,
			format: "json"
		};
		function displayPhotos(data) {
			var photoHTML = "<ul>";
			$.each( data.items, function (i, item) {
				photoHTML += '<li class="grid-25 tablet-grid-50"><a href='+ item.link + ' class="image" target="_blank">'+ '<img src='+item.media.m+'></a></li>'
			});
			photoHTML += "</ul>"
			$('#photos').html(photoHTML);
		}
		$.getJSON(flickerAPI, flickrOptions, displayPhotos);
	});
}); //end ready