/**
 * * ----------------------------------------- *
 * * --- UNDISPUTED LOOT PRODUCTION SERVER --- *
 * * ----------------------------------------- *
 * @description
 * This server is meant to be run inside of the Heroku Node process in order to server the static index.html file.
 *
 * This is a quick-hit solution and not the most optomized, but we're not serving 1,000,000+ users :)
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8008;

const app = express();

const _build = path.join(__dirname, '/build');

app.use(express.static(_build));

// app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
  res.sendFile(`${_build}/index.html`);
});

app.listen(port, () => {
  console.log(`Undisputed loot application is now listening on port ${port}`);
});
