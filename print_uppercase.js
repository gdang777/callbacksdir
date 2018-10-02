var getHtml = require('./http-function');

function printUpperCase(data){
    console.log(data.toUpperCase())

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
};


getHtml(requestOptions, printUpperCase);
