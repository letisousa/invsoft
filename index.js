const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controller');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/Users', controllers.Users); // essa parte ta errada

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
