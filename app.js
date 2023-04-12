const express = require('express');
const app = express();
const port = 5500;

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from the server side!', app: 'natours' });
});

app.post('/', (req, res) => {
  res.send('You can post!!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
