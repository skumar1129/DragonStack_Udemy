const express = require('express');
const cors = require('cors');
const GenerationEngine = require('./generation/engine.js');
const dragonRouter = require('./api/dragon.js');
const generationRouter = require('./api/generation.js')

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

// app.use(cors({origin: 'http://localhost:1234'}));

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

app.use((err, req, res, next) => {
  const statusCode = 500 || err.statusCode;

  res.status(statusCode).json({
    type: error,
    message: err.message
  });
});

engine.start();


module.exports = app;
