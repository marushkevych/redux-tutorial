// run this with node (not with babel-node)

var webpackDevServer = require('./src/webpack-dev-server');
var server = require('./src/server');

const port = 5050

webpackDevServer.listen(port)
server.listen(port)

console.log(`Server is listening on http://127.0.0.1:${port}`)