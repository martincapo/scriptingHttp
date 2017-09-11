var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  var array = html.split(" ");
  html = array.reverse().join(' ');
  /* Write your code here! */
  console.log(html) ;

}

getHTML(requestOptions, printReverse);