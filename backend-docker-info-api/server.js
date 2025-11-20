import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Main project endpoint: success tips
app.get("/success", (req, res) => {
  res.json({
    steps: [
      "Use a lightweight base image (node:18-alpine, python:3.12-slim)",
      "Use a .dockerignore to keep the image clean",
      "Copy only what's needed before installing dependencies",
      "Use multi-stage builds to reduce size",
      "Expose necessary ports for documentation",
      "Never run your app as root inside the container",
      "Use HEALTHCHECK to monitor your container",
      "Tag images properly (example: my-app:v1.0.0)",
    ],
  });
});

// Extra credit endpoint
app.get("/stop", (req, res) => {
  res.send("docker stop $(docker ps -aq)");
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
