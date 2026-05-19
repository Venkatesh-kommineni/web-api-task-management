import express, { Application } from "express";
import taskRoutes from "./routes/taskRoutes";
import { errorHandler } from "./middleware/errorHandler";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./config/swagger";
import cors from "cors";

const app: Application = express();
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "x-custom-auth"]
}));
app.use(express.json());

app.use("/api/tasks", taskRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
