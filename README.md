# Javascript Unit Test Examples
[![Build Status](https://travis-ci.org/chriskevin/javascript-unittest-examples.svg?branch=master)](https://travis-ci.org/chriskevin/javascript-unittest-examples)
[![Code Climate](https://codeclimate.com/github/chriskevin/javascript-unittest-examples/badges/gpa.svg)](https://codeclimate.com/github/chriskevin/javascript-unittest-examples)
[![Test Coverage](https://codeclimate.com/github/chriskevin/javascript-unittest-examples/badges/coverage.svg)](https://codeclimate.com/github/chriskevin/javascript-unittest-examples/coverage)
[![Issue Count](https://codeclimate.com/github/chriskevin/javascript-unittest-examples/badges/issue_count.svg)](https://codeclimate.com/github/chriskevin/javascript-unittest-examples)
[![dependency Status](https://david-dm.org/chriskevin/javascript-unittest-examples.svg)](https://david-dm.org/chriskevin/javascript-unittest-examples)
[![devDependency Status](https://david-dm.org/chriskevin/javascript-unittest-examples/dev-status.svg)](https://david-dm.org/chriskevin/javascript-unittest-examples#info=devDependencies)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/hyperium/hyper/master/LICENSE)

This is an example project demonstrating how to setup unit tests for different Javascript frameworks.

## Prerequisites
The project assumes that you have [Node.js](https://nodejs.org/en/) installed and use npm.
Before attempting to run any tests make sure to run `npm install`. This will install all the required modules, plugins and vendor libraries.
[Jasmine](http://jasmine.github.io/) is the chosen testing framework and is run using [Karma](http://karma-runner.github.io/).

## Running Tests
To run the tests enter `npm test`, this will trigger a single run of Karma using the config file `config/karma.config.js`.
Karma will also produce code coverage which will be located in `coverage/`.

## License
[MIT License](https://github.com/chriskevin/javascript-unittest-examples/blob/master/LICENSE)
