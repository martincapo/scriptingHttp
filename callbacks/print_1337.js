var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  /* Write your code here! */
  for(let i = 0; i < html.length; i++) {
    if(html.charAt(i) === 'a') {
      html = html.replace(html.charAt(i), '4');
    } else if(html.charAt(i) === 'e') {
      html = html.replace(html.charAt(i), '3');
    } else if(html.charAt(i) === 'l') {
      html = html.replace(html.charAt(i), '1');
    } else if(html.charAt(i) === 'o') {
      html = html.replace(html.charAt(i), '0');
    } else if(html.charAt(i) === 's') {
      html = html.replace(html.charAt(i), '5');
    } else if(html.charAt(i) === 't') {
      html = html.replace(html.charAt(i), '7');
    }
  }

  while(html.indexOf('ck') !== -1) {
    html = html.replace('ck', 'x');
  }
  while(html.indexOf('er') !== -1) {
    html = html.indexOf('er', '0r');
  }
  while(html.indexOf('you') !== -1) {
    html = html.replace('you', 'j00');
  }


  console.log(html) ;

}

getHTML(requestOptions, print1337);