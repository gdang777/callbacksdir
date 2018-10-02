var getHtml = require('./http-function');

function printlowerCase(data){
    console.log(data.toLowerCase())

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
};


getHtml(requestOptions, printlowerCase);
