var cors           = require('cors');
var express        = require('express');
var load           = require('express-load');
var bodyParser     = require('body-parser');
var cookieParser   = require('cookie-parser');
var expressSession = require('express-session');
var methodOverride = require('method-override');
var error          = require('./middlewares/error');
var mongoose       = require('mongoose');
var app            = express();

var uristring = 
	process.env.MONGOLAB_URI || 
	process.env.MONGOHQ_URL || 
	'mongodb://localhost/hscoffeeclub';

// global.db = mongoose.connect('mongodb://localhost/hscoffeeclub');
global.db = mongoose.connect(uristring, function(err, res) {
	if (err) { 
		console.log ('ERROR connecting to: ' + uristring + '. ' + err);
	} 
	else {
		console.log ('Succeeded connected to: ' + uristring);
	}
});


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cors());
app.use(cookieParser('hscoffeeclub'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

load('models')
	.then('controllers')
	.then('routes')
	.into(app);

app.use(error.notFound);
app.use(error.serverError);

// var port = process.env.PORT || config.port || 9999;
var port = process.env.PORT || 9999;

app.listen(port, null, function(err) {
	console.log('Listening on port %s...', port);
});