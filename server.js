// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import handler from "./api/gemini.js";

const app = express();
app.use(express.json());

// Setup static files (HTML, CSS, JS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname));

// Route untuk API Gemini
app.post("/api/gemini", handler);

// Jalankan server di port 3000
const PORT = 3000;
app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`));
