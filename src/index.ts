import "reflect-metadata";
import express from 'express';
import { AppDataSource } from './config/databaseConnect.ts';
import categoryRouter from './routes/categoryRoute.ts';
import { errorHandler } from './middlewares/errorHandler.ts';

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

app.use("/categories", categoryRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});