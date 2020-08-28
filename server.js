import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') dotenv.config();

import app from './server/app.js';
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
