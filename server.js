'use strict';

var cors           = require('cors');
var express        = require('express');
var load           = require('express-load');
var bodyParser     = require('body-parser');
var cookieParser   = require('cookie-parser');
var expressSession = require('express-session');
var methodOverride = require('method-override');
var compression    = require('compression');
var error          = require('./middlewares/error');
var loadConfig     = require('./utils/loadConfig');
var config         = loadConfig();
var app            = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(compression());
app.use(cors());
app.use(cookieParser(config.secret));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public', config.cache ));

load('models')
	.then('controllers')
	.then('routes')
	.into(app);

app.use(error.notFound);
app.use(error.serverError);

var port = process.env.PORT || config.port || 3000;

app.listen(port, null, function(err) {
	console.log('Listening on port %s...', port);
});

module.exports = app;