import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import winston from "winston";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import fileRoutes from "./routes/file.routes.js";

// Environment Configuration
dotenv.config();
// Initialize Express application
const app = express();

const PORT = process.env.SERVER_PORT || 5000;
const FRONT_END_URL = process.env.FRONT_END_URL;
const DB_URL = process.env.DATABASE_URL;

// CORS options
const corsOptions = {
  origin: [FRONT_END_URL],
  methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
  exposedHeaders: ['Content-Disposition'],
  credentials: true,
};

// Enables CORS for requests
app.use(cors(corsOptions));
// Parse requests of content-type - application/json
app.use(express.json());
// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Set Allowed HTTP headers for cross-origin requests
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Create a Winston logger instance
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

// Setup Morgan to use Winston for logging
app.use(
  morgan("combined", {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  })
);

/** mongoDb connection */
mongoose
  .connect(DB_URL)
  .then(() => console.log("connected to MongoDB"))
  .catch((error) => console.log("failed to connect MongoDB:", error));

// Server Health Check
app.get("/", (req, res) => {
  res.json({ message: "I'm alive" });
});

/*routes */
authRoutes(app);
fileRoutes(app);

// Set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
