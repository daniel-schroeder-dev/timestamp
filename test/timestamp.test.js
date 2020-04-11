const app = require('../server');
const supertest = require('supertest');

const apiURL = '/api/timestamp/';

describe('timestamp api valid dateString params', function() {
  
  const expected = {
    "unix":1451001600000, 
    "utc":"Fri, 25 Dec 2015 00:00:00 GMT"
  };
  
  test('should return valid JSON when passed valid calendar date', done => {
    supertest(app)
      .get(apiURL + '2015-12-25')
      .expect(200, expected)
      .end(done);
  });

  test('should return valid JSON when passed valid integer representing date', done => {
    supertest(app)
      .get(apiURL + 1451001600000)
      .expect(200, expected)
      .end(done);
  });


});
