// server.js
import 'dotenv/config';
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

// Jalankan server (PORT dari env bila tersedia)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`));
