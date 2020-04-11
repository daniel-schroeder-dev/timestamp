const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

const parseDateString = dateString => {
  return isNaN(+dateString) ? dateString : +dateString;
};

app.get('/api/timestamp/', (req, res, next) => {
  const date = new Date();
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),  
  });
});

app.get('/api/timestamp/:dateString', (req, res, next) => {
  const dateString = parseDateString(req.params.dateString);
  const date = new Date(dateString);
  if (date.toString() === 'Invalid Date') return res.status(400).json({ error: date.toString() });
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

module.exports = app;
