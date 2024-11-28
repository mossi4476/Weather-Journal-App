import express from 'express';  // ES module import
import cors from 'cors';       // ES module import
import path from 'path';       // ES module import
import { fileURLToPath } from 'url';

// For dynamic ES module imports, use fileURLToPath for __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Enable CORS
app.use(cors());

// Serve static files (HTML, CSS, JS) from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// API route: Get the project data
let projectData = {};

// Endpoint to get all data
app.get('/all', (req, res) => {
    res.send(projectData);
});

// Endpoint to add data
app.post('/add', express.json(), (req, res) => {
    projectData = { ...projectData, ...req.body };
    res.send(projectData);
});

// Start the server
const port = 8000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
