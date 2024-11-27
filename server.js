// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
import express from 'express';
import cors from 'cors';
/* Dependencies */
import bodyParser from 'body-parser';

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// POST route
app.post('/add', addInfo);

function addInfo(req, res) {
    projectData['temp'] = req.body.temp;
    projectData['date'] = req.body.date;
    projectData['content'] = req.body.content;
    res.send(projectData);
}

// Initialize all route with a callback function
app.get('/all', getInfo);

// Callback function to complete GET '/all'
function getInfo(req, res) {
    res.send(projectData);
};

// Set up and Spin up the server
const port = 3000;
const server = app.listen(port, () => {
    console.log(`server is listening on port: ${port}`); // Callback to debug
});