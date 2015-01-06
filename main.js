$.getJSON('data.json', function(data) {
  $('body').prepend('<div class="container"> <h1>GitHub Language Colors</h1> <p>This little experiment has taken the data from <code>languages.yml</code> and visualized it in a colorful way.</p> </div>')
  for(var i=0; i < data.length; i++) {
    var c = data[i][1]
    c = c.substring(1);
    var rgb = parseInt(c, 16);
    var r = (rgb >> 16) & 0xff;
    var g = (rgb >>  8) & 0xff;
    var b = (rgb >>  0) & 0xff;
    var luminance = (r * 0.299 + g * 0.587 + b * 0.114) / 3;

    if (luminance < 40) {
      $('#box').append('<div class="square" style="color:#EEE;background: ' + data[i][1] + '">' + data[i][0] + '</div>')
    } else {
      $('#box').append('<div class="square" style="background: ' + data[i][1] + '">' + data[i][0] + '</div>')
    }
  }
});
