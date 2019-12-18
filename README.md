# The Coffee Club

## Motivation

Sometime ago at [CG Hackspace](https://github.com/cghackspace), we bought a coffee machine. For sometime, the control of the capsules consumption was through notes made individually.

<p align="center">
	<img src="https://raw.githubusercontent.com/coffee-club/coffee-club/assets/post-it.jpg" width="430" height="373" />
	<img src="https://raw.githubusercontent.com/coffee-club/coffee-club/assets/nespresso.gif" width="430" />
</p>

## Screenshots

### Desktop

<p align="center">
	<img src="https://raw.githubusercontent.com/coffee-club/coffee-club/assets/desktop1.png" width="430" />
	<img src="https://raw.githubusercontent.com/coffee-club/coffee-club/assets/desktop2.png" width="430" />
	<img src="https://raw.githubusercontent.com/coffee-club/coffee-club/assets/desktop3.png" width="430" />
	<img src="https://raw.githubusercontent.com/coffee-club/coffee-club/assets/desktop4.png" width="430" />
</p>

### Mobile

<p align="center">
	<img src="https://raw.githubusercontent.com/coffee-club/coffee-club/assets/mobile1.jpg" width="210" />
	<img src="https://raw.githubusercontent.com/coffee-club/coffee-club/assets/mobile2.jpg" width="210" />
	<img src="https://raw.githubusercontent.com/coffee-club/coffee-club/assets/mobile3.jpg" width="210" />
	<img src="https://raw.githubusercontent.com/coffee-club/coffee-club/assets/mobile4.jpg" width="210" />
</p>

## Setup

1.  Clone it:

    ```
    git clone git@github.com:brenopolanski/coffee-club.git
    ```

2.  Install [NodeJS](https://nodejs.org/en/download/), [MongoDB](https://docs.mongodb.org/v3.0/installation/) and [GulpJS](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#1-install-gulp-globally), if you don't have it yet.

3.  Install Dependencies:

    ```
    cd coffee-club && npm install
    ```

4.  Adjust config.json:

    ```javascript
    {
      "oauth_client_id": "GITHUB_APPLICATION_CLIENT_ID",
      "oauth_client_secret": "GITHUB_APPLICATION_CLIENT_SECRET",
      "oauth_redirect_uri": "GITHUB_APPLICATION_REDIRECT",
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

    > **Important**: Add your GitHub username in `members` property.

    Also see the [documentation on Github OAuth API](https://developer.github.com/v3/oauth/).

5.  Serve it:

    ```
    npm start
    ```

6.  Execute tests (optional):

        ```
        npm test
        ```

    <img src="https://raw.githubusercontent.com/coffee-club/coffee-club/assets/tests.png" />

## Tasks

-   `gulp`: Initialize stylus and watch for changes;
-   `gulp bower-install`: Call for Bower Install;
-   `gulp build`: Call for PostCSS;
-   `gulp stylus`: Compile stylus files;
-   `gulp watch`: Call for watch files.

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

## Deploy on Azure

### Azure Button

Use the button below to instantly setup your own Gatekeeper instance on Azure.

[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)

### Azure manually

1. Create a new Azure site

    ```
    azure site create SITE_NAME --git
    ```

2. Provide OAUTH_CLIENT_ID and OAUTH_CLIENT_SECRET:

    ```
    azure site appsetting add OAUTH_CLIENT_ID=XXXX
    azure site appsetting add OAUTH_CLIENT_SECRET=YYYY
    ```

3. Push changes to Azure

    ```
    git push azure master
    ```

## Support

### Browser Support

| ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png) |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                      | Latest ✔                                                                                            | Latest ✔                                                                                               | Latest ✔                                                                                         | Latest ✔                                                                                            |

### Server

| <a href="https://nodejs.org"><img height=48 src="https://raw.githubusercontent.com/caiogondim/javascript-server-side-logos/master/node.js/standard/454x128.png"></a> |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.10+ ✔                                                                                                                                                              |

## Contributing

If you want to help, please read the [Contributing](https://github.com/brenopolanski/coffee-club/blob/master/CONTRIBUTING.md) guide.

## History

For detailed changelog, see [Releases](https://github.com/brenopolanski/coffee-club/releases).

## License

[MIT License](https://brenopolanski.mit-license.org/) © Breno Polanski
