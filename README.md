# The Coffee Club

## Setup

1. Clone it
	```
	git clone git@github.com:brenopolanski/coffee-club.git
	```
	
2. Install Dependencies
	
	```
	cd coffee-club && npm install
	```

3. Adjust config.json

	```js
	{
	  "oauth_client_id": "27ea1ee40e7ace39f882",
	  "oauth_client_secret": "7080ae473e475a2820633d59129afe00adbbf3d6",
	  "oauth_redirect_uri": "http://localhost:3000/authenticate/",
	  "oauth_scope": "user",
	  "oauth_host": "github.com",
	  "oauth_port": 443,
	  "oauth_path": "/login/oauth/access_token",
	  "oauth_method": "POST",
	  "port": 3000,
	  "members": ["brenopolanski"],
	  "secret": "coffeeclub",
	  "mongodb": {
	    "test": "mongodb://localhost/coffeeclub_test",
	    "development": "mongodb://localhost/coffeeclub"
	  },
	  "cache": {
	    "maxAge": 3600000
	  }
	}
	```

4. Serve it

	```
	$ npm start
	```

5. Execute tests

	```
	$ npm test
	```
<img src="https://raw.githubusercontent.com/brenopolanski/coffee-club/master/screenshots/tests.png" />
	
## Deploy on Heroku

### Heroku Button

Use the button below to instantly setup your own Coffee Club instance on Heroku.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

### Heroku manually

1. Create a new Heroku app

   ```
   heroku apps:create APP_NAME
   ```
   
2. Add Addons MongoLab

   ```
   heroku addons:add mongolab
   ```

3. Provide OAUTH_CLIENT_ID and OAUTH_CLIENT_SECRET:

   ```
   heroku config:set OAUTH_CLIENT_ID=XXXX OAUTH_CLIENT_SECRET=YYYY
   ```

4. Push changes to heroku

   ```
   git push heroku master
   ```
OR

   ```
   heroku restart
   ```

## Screenshots

### Desktop

<img src="https://raw.githubusercontent.com/brenopolanski/coffee-club/master/screenshots/desktop1.png" width="400" />
<img src="https://raw.githubusercontent.com/brenopolanski/coffee-club/master/screenshots/desktop2.png" width="400" />
<img src="https://raw.githubusercontent.com/brenopolanski/coffee-club/master/screenshots/desktop3.png" width="400" />
<img src="https://raw.githubusercontent.com/brenopolanski/coffee-club/master/screenshots/desktop4.png" width="400" />

### Mobile

<img src="https://raw.githubusercontent.com/brenopolanski/coffee-club/master/screenshots/mobile1.jpg" width="200" />
<img src="https://raw.githubusercontent.com/brenopolanski/coffee-club/master/screenshots/mobile2.jpg" width="200" />
<img src="https://raw.githubusercontent.com/brenopolanski/coffee-club/master/screenshots/mobile3.jpg" width="200" />
<img src="https://raw.githubusercontent.com/brenopolanski/coffee-club/master/screenshots/mobile4.jpg" width="200" />

## Support

### Browser

![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/edge/edge_48x48.png) | **Android** | **iOS** | **Windows Phone** |
:---: | :---: | :---: | :---: | :---: |  :---: | :---: | :---: | :---: |
Latest ✔ | Latest ✔ | 11+ ✔ | Latest ✔ | 8.0+ ✔ | Latest ✔ | 4.4+ ✔ | 7+ ✔ | 8+ ✔ |

### Server

<a href="https://nodejs.org"><img height=48 src="https://raw.githubusercontent.com/caiogondim/javascript-server-side-logos/master/node.js/standard/454x128.png"></a> |
--- |
0.10+ ✔ |

## Contributing

If you want to help, please read the [Contributing](https://github.com/brenopolanski/coffee-club/blob/master/CONTRIBUTING.md) guide.

## History

For detailed changelog, see [Releases](https://github.com/brenopolanski/coffee-club/releases).

## License

[MIT License](http://brenopolanski.mit-license.org/) © Breno Polanski
