// backend/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const dreamwallRoutes = require("./routes/dreamwallRoutes");

const app = express();
const PORT = process.env.PORT || 5001;

// ✅ Allow all origins or specify your frontend domain
// app.use(cors({
//   origin: ["https://evp-xs9f.onrender.com", "https://ibexvst.com/evp", "https://ibexvst.com/", "http://localhost:4173/", "http://localhost:4173/evp/", "http://10.210.123.172:4173/", "http://10.210.123.172:4173/evp/"], // ✅ Allow your frontend
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true,
// }));

app.use(cors());

const cors = require("cors");


// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// ✅ Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Routes
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/dreamwall", dreamwallRoutes);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

