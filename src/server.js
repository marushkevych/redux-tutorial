var http  = require('http')
var React = require('react')

var server = http.createServer(function(req, res) {
	if(req.url.match('favicon.ico')){
    return res.end();
  }

  res.write(
    `<!DOCTYPE html>
    <html>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <div id="app-wrapper"></div>
        <script type="text/javascript" src="http://localhost:5051/static/bundle.js"></script>
      </body>
    </html>`
  );

  res.end();
});

module.exports = server;