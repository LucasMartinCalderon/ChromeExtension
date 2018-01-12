var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'https://i.ytimg.com/vi/ZeEpFUAx4ug/maxresdefault.jpg' + images[i].width + '/' + images[i].height;
}
