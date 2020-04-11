const assert = require('assert').strict;
const bent = require('bent');

const apiURL = 'http://localhost:3000/api/timestamp/';
const getJSON = bent(apiURL, 'GET', 'json', 200);


describe('Timestamp api', function() {
  
  describe('GET /api/timestamp/:valid_date_string', function() {
    it('should return JSON with unix and utc fields', async function() {

      const expected = {
        "unix":1451001600000, 
        "utc":"Fri, 25 Dec 2015 00:00:00 GMT"
      };

      const res = await getJSON('2015-12-25');
      assert.deepStrictEqual(res, expected);
    
    });
  });


});