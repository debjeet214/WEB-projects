const express = require('express');
const router = require('./routers/app');
const app = express();

app.use('/', router);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});