import 'angular';
import 'angular-mocks';

const testContext = require.context('../app', true, /\.spec\.js/);
testContext.keys().forEach(testContext);
