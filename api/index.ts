// require('../src/index');

// import express from 'express';
// import { webhookCallback } from 'grammy';

// import bot from '../src/core/bot';

// const app = express();

// app.use(express.json());
// app.use(`/api/index`, webhookCallback(bot));

// export default app;

require('../src/index');

import { webhookCallback } from 'grammy';
import bot from '../src/core/bot';

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, webhookCallback(bot));
}

export default handler;
