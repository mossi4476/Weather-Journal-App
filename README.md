# Weather Journal App

## Overview
The Weather Journal App is a simple and intuitive web application that allows users to document their feelings alongside real-time weather data. By entering a zip code, users can access the latest weather conditions from the OpenWeatherMap API, view the current temperature, and add personal notes with the date.

## Key Features
- **Weather Data Retrieval**: Get real-time weather updates based on your zip code using the OpenWeatherMap API.
- **Personal Notes**: Input a brief description of your feelings.
- **Data Display**: View the current temperature, date, and your personal notes on the interface.

## Project Structure
The project consists of the following files:

- `website/index.html`: The main HTML structure of the web application.
- `website/style.css`: The stylesheet for customizing the web page's appearance.
- `website/app.js`: The JavaScript file that manages client-side functionality.
- `server.js`: The server-side script built with Express.js to handle requests.
- `package.json`: Contains project metadata and dependencies.
- `README.md`: This documentation file.

## Getting Started
To set up the Weather Journal App, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/mossi4476/Weather-Journal-App.git
    ```
2. Change to the project directory:
    ```bash
    cd WeatherJournalApp
    ```
3. Install the necessary dependencies:
    ```bash
    npm install
    ```

## Running the Application
1. Start the server:
    ```bash
    npm run start
    ```
2. Open your web browser and navigate to `http://localhost:3000` to begin using the app.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgments
- Thank you to OpenWeatherMap for providing the weather data API.
- Special thanks to all contributors of this project.
