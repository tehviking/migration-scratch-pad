import gravatarUrlFromEmail from '../../../utils/gravatar-url-from-email';
import { module, test } from 'qunit';

module('gravatarUrlFromEmail');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = gravatarUrlFromEmail("brandon.hays@gmail.com", 400);
  assert.equal(result, "http://gravatar.com/avatar/6fd16b1b6a307ca583526e2ec4dab52d?s=400");
});
