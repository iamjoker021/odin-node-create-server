const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer(function (req, res) {
  const displayFile = (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  }

  const path = url.parse(req.url, true).pathname;
  console.log(path, path === '/', path === '/index.html', path === '/favicon.ico');

  switch (path) {
    case '/' : {
      console.log('index')
      fs.readFile('./index.html',displayFile);
      break;
    }
    case '/index.html' : {
      fs.readFile('.' + path,displayFile);
      break;
    }
    case '/about.html' : {
      fs.readFile('.' + path,displayFile);
      break;
    }
    case '/contact-me.html' : {
      fs.readFile('.' + path,displayFile);
      break;
    }
    case '/favicon.ico' : {
      console.log('Favicons')
      break;
    }
    default :{
      console.log('404')
      fs.readFile('./404.html',displayFile);
    }
  }

}).listen(8080);