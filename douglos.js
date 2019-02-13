var imgs = document.getElementsByTagName('img');

for(var i = 0; i < imgs.length; i++) {
  if (Math.random() >= 0.9) {
    imgs[i].src="https://i.imgur.com/XSrHlah.jpg"
  }
}
