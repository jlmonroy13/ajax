function Song(title, artist, duration) {
	this.title = title;
	this.artist = artist;
	this.duration = duration;
	this.isPlaying = false;
}

Song.prototype.play = function() {
	this.isPlaying = true;
};

Song.prototype.stop = function() {
	this.isPlaying = false;
};

Song.prototype.toHTML = function() {
	var htmlString = '<li ';
	if(this.isPlaying) {
		htmlString += 'class="current">';
	}
	else {
		htmlString += '>';
	}
	htmlString +=  this.title + ' - ';
	htmlString +=  this.artist;
	htmlString +=  '<span class="duration">'
	htmlString += this.duration;
	htmlString += '</span></li>';

	return htmlString;
};