const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/api/timestamp/:date_string', (req, res, next) => {
  const date = new Date(req.params.date_string);
  res.json({
    // unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

module.exports = app;
