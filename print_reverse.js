var getHtml = require('./http-function');

function printReverse(data){
    console.log(data.split("").reverse().join(""));

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
};


getHtml(requestOptions, printReverse);
