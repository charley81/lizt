import express from 'express';
import dotenv from 'dotenv';
import taskRoutes from './routes/task-routes.js';
import { errorHandler } from './middleware/error-middleware.js';
import colors from 'colors';
import { connectDB } from './config/db.js';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(cors());

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;

connectDB();

// router setup
app.use('/api/tasks', taskRoutes);

// error handling
app.use(errorHandler);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  next();
});

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
