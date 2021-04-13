let contentGrid = document.getElementById('contentGrid');

let jsonDatabase = [{
    "color": "#FF9AA2",
    "title": "Anaphylaxis",
    "artist": "PUP",
    "genre": "Punk Rock",
    "year": "2020",
    "favoriteLyric": "Yeah, I needed something less delicate. Cause I can't seem to breathe, and I'm totally nervous again",
    "youtubeLink": "<iframe width = \"420\" height = \"236.25\" src = \"https://www.youtube.com/embed/PWNyNg3SVqk\" title = \"YouTube video player\" frameborder = \"0\" allow = \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen onload='resizeIframe(this)'> < /iframe>"
  },
  {
    "color": "#FFB7B2",
    "title": "Kids",
    "artist": "Current Joys",
    "genre": "Indie",
    "year": "2020",
    "favoriteLyric": "Oh, I am just a kid. I never use my brain, I only use my heart and my imagination",
    "youtubeLink": "<iframe width = \"420\" height = \"236.25\" src = \"https://www.youtube.com/embed/dDDulcqQEuc\" title = \"YouTube video player\" frameborder = \"0\" allow = \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen onload='resizeIframe(this)'> < /iframe>"
  },
  {
    "color": "#FFDAC1",
    "title": "Monsters",
    "artist": "Seafret",
    "genre": "Alternative/Indie",
    "year": "2020",
    "favoriteLyric": "Paralysed by my own emotion, something inside got me wondering is this real?",
    "youtubeLink": "<iframe width = \"420\" height = \"236.25\" src = \"https://www.youtube.com/embed/q0afRR3cJ9c\" title = \"YouTube video player\" frameborder = \"0\" allow = \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen onload='resizeIframe(this)'> < /iframe>"
  },
  {
    "color": "#E2F0CB",
    "title": "Serotonin",
    "artist": "girl in red",
    "genre": "Indie Pop",
    "year": "2021",
    "favoriteLyric": "Can't hide from the corners of my mind. I'm terrified of what's inside",
    "youtubeLink": "<iframe width = \"420\" height = \"236.25\" src = \"https://www.youtube.com/embed/wehVzQt4Czg\" allowfullscreen onload='resizeIframe(this)'> < /iframe>"
  },
  {
    "color": "#B5EAD7",
    "title": "Men Explain Things to Me",
    "artist": "Tacocat",
    "genre": "Riot grrrl/Pop-Punk",
    "year": "2016",
    "favoriteLyric": "We get it dude, already heard enough from you",
    "youtubeLink": "<iframe width = \"420\" height = \"236.25\" src = \"https://www.youtube.com/embed/PGM2tCTpuzY\" title = \"YouTube video player\" frameborder = \"0\" allow = \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen onload='resizeIframe(this)'> < /iframe>"
  },
  {
    "color": "#C7CEEA",
    "title": "Hit Like A Girl",
    "artist": "Meet Me @ The Altar",
    "genre": "Pop-Punk",
    "year": "2021",
    "favoriteLyric": "Ladies and ladies— No gentlemen— Show me what you got",
    "youtubeLink": "<iframe width = \"420\" height = \"236.25\" src = \"https://www.youtube.com/embed/fhadDGg9HIU\" title = \"YouTube video player\" frameborder = \"0\" allow = \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen onload='resizeIframe(this)'> < /iframe>"
  }
];

function resizeIframe(obj) {
  obj.style.height = "20vw";
  obj.style.width = "35.56vw";
}

function createElement(incomingJSON) {
  //create container for whole song
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('element');
  newContentElement.style.background = incomingJSON['color'];
  //title of song
  let newContentTitle = document.createElement("H3");
  newContentTitle.innerText = incomingJSON["title"];
  newContentElement.appendChild(newContentTitle);
  //container for details
  let newContentDetails = document.createElement("DIV");
  newContentDetails.classList.add('details');
  //artist
  let newContentArtist = document.createElement("P");
  newContentArtist.innerText = "Artist: " + incomingJSON["artist"];
  newContentDetails.appendChild(newContentArtist);
  //genre
  let newContentGenre = document.createElement("P");
  newContentGenre.innerText = "Genre: " + incomingJSON["genre"];
  newContentDetails.appendChild(newContentGenre);
  //year
  let newContentYear = document.createElement("P");
  newContentYear.innerText = "Released: " + incomingJSON["year"];
  newContentDetails.appendChild(newContentYear);
  //add details to main container
  newContentElement.appendChild(newContentDetails);
  //lyrics
  let newContentLyrics = document.createElement("H4");
  newContentLyrics.innerText = "Favorite Lyrics: " + "'" + incomingJSON["favoriteLyric"] + "'";
  newContentElement.appendChild(newContentLyrics);
  //youtube video
  let newContentVideo = document.createElement("DIV");
  newContentVideo.innerHTML = incomingJSON["youtubeLink"];
  newContentVideo.classList.add('video');
  newContentElement.appendChild(newContentVideo);
  contentGrid.appendChild(newContentElement);
}
for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}
