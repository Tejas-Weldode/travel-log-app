const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const logsRoutes = require("./routes/logs");

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to Amazon DocumentDB"))
    .catch((err) => console.error("DocumentDB connection error:", err));

// Routes
app.use("/api/logs", logsRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
