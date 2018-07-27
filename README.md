# simple-api-client

Ember 3 application deployed at AWS S3 and using Rails 5 as back-end API deployed at Heroku.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd simple-api-client`
* `yarn install`

## Running / Development

The application is using Rails 5 API backend, see [simple-api](https://github.com/belgoros/simple-api) code source for more details.
start up the back-end API and pass its url to ember

* `ember serve --proxy=http://localhost:3000`
* visit your app at [http://localhost:4200
