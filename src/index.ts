import express from 'express';
import { AppDataSource } from './config/databaseConnect.ts';
import { categoryRouter } from './routes/categoryRoute.ts';
import { errorHandler } from './middlewares/errorHandler.ts';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use("/categories", categoryRouter);

app.use(errorHandler);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });