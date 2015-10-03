# Javascript Unit Test Examples
This is an example project demonstrating how to settup unit tests for different Javascript frameworks.

## Prerequisites
The project assumes that you have [Node.js](https://nodejs.org/en/) installed and use npm.
Before attempting to run any tests make sure to run `npm install` and `bower install`. This will install all the required modules, plugins and vendor libraries.
[Jasmine](http://jasmine.github.io/) is the chosen testing framework and is run using [Karma](http://karma-runner.github.io/).

## Running Tests
To run the tests enter `npm test`, this will trigger a single run of Karma using the config file `test/config/karma-test-config.js`.
Karma will also produce code coverage which will be located in `test/reports/coverage`.