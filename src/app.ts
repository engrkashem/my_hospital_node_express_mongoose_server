import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

/***** Parser Middleware *****/
app.use(cors());
app.use(express.json());

app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('My Hospital app server in running..');
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
