const app = require('../server');
const assert = require('assert').strict;
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
  
  test('should return valid JSON when passed empty date string', done => {
    
    const now = {
      unix: new Date().getTime(),
      utc: new Date().toUTCString(),      
    };

    supertest(app)
      .get(apiURL)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const unixRes = Math.floor(res.body.unix / 100);
        const unixNow = Math.floor(now.unix / 100);
        assert.equal(unixRes, unixNow);
        assert.equal(now.utc, res.body.utc);
        return done();
      });
  });

});
