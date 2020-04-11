const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

const parseDateString = dateString => {
  return isNaN(+dateString) ? dateString : +dateString;
};

app.get('/api/timestamp/:dateString', (req, res, next) => {
  const dateString = parseDateString(req.params.dateString);
  const date = new Date(dateString);
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

module.exports = app;
