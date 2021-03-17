import express from "express";

import categoriesRoutes from "./routes/categories.routes";

const app = express();

app.use(express.json());

// Categories routes
app.use("/categories", categoriesRoutes);

export default app;
