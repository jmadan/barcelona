let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let apiHandler = require('./handlers/apiroute');
// let compression = require('compression');
// let webpack = require('webpack');
// let config = require('../webpack.config.js');

// let webpackDevMiddleware = require('webpack-dev-middleware');
// let webpackHotMiddleware = require('webpack-hot-middleware');

let app = express();
// app.use(compression());
// let compiler = webpack(config);

// app.use(webpackDevMiddleware(compiler, {
//     noInfo: true,
//     lazy: false,
//     quite: false,
//     publicPath: config.output.publicPath,
//     stats: {
//         colors: true
//     }
// }));

// app.use(webpackHotMiddleware(compiler, {
//     log: console.log
// }));

app.use('/', express.static('build/'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest.
    res.setHeader('Cache-Control', 'no-cache');
    console.log("***********request: ", req.url);
    next();
});

app.get('/', (req, res) => {
    // res.render('index');
    var options = {
        root: path.join(__dirname, './public/html'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    res.sendFile('index.html', options);
});

app.use('/api', apiHandler);

let PORT = process.env.PORT || 8080;
server = app.listen(PORT, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Server started http://localhost:" + PORT);
});
