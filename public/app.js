// Personal API Key for OpenWeatherMap API
const apiKey = 'df78417cd30cd606c667493f32c9e9b0'; // Replace with your actual API Key

document.getElementById('generate').addEventListener('click', generateData);

// Function to generate data and update the UI
async function generateData() {
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    // Fetch weather data from OpenWeatherMap API
    const weatherData = await getWeather(zip);

    // Send data to server via POST request
    await postData('/add', {
        date: new Date().toLocaleDateString(),
        temp: weatherData.main.temp,
        feel: feelings
    });

    // Retrieve data from server and update UI
    await retrieveData();
}

// Fetch weather data from OpenWeatherMap API
async function getWeather(zip) {
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=imperial`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Retrieve data from the server
const retrieveData = async () => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('temp').innerHTML = Math.round(allData.temp) + '°F';
        document.getElementById('content').innerHTML = allData.feel;
        document.getElementById('date').innerHTML = allData.date;

        // Show entry holder div after data is received
        document.getElementById('entryHolder').style.display = 'block';
    } catch (error) {
        console.log('Error:', error);
    }
}

// Function to send POST data to the server
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
}
