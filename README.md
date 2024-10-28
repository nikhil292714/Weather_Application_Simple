# Weather Data Retrieval and Analysis System
Hosted link: https://nikhil292714.github.io/Weather_ForeCast_Application/



![sun](https://github.com/user-attachments/assets/b252c407-886a-44a2-a368-3e9d353db011)




## Overview

This project is designed to retrieve weather data from the OpenWeatherMap API at configurable intervals, convert temperature values based on user preference, and provide daily weather summaries including additional parameters like humidity and wind speed. The system is built to be robust, easy to set up, and extendable.

## Features

- **System Setup:** Initializes and connects to the OpenWeatherMap API using a valid API key.
- **Data Retrieval:** Simulates API calls at configurable intervals to retrieve and parse weather data for specified locations.
- **Temperature Conversion:** Converts temperature values from Kelvin to Celsius or Fahrenheit based on user preference.
- **Daily Weather Summary:** Simulates weather updates over several days and calculates average, maximum, minimum temperatures, and dominant weather conditions.
- **Additional Parameters:** Supports retrieval and analysis of additional weather parameters such as humidity and wind speed.
- **5 days Weather Forecast** 

## Design Choices

- **Modularity:** The system is divided into distinct modules for initialization, data retrieval, temperature conversion, and summary generation, making it easy to maintain and extend.
- **Configurability:** API call intervals and temperature units are configurable to allow flexibility.
- **Extensibility:** Designed to easily incorporate additional weather parameters from the OpenWeatherMap API.

## Requirements
- Screen 1070*680 minimum
- Nodejs (optional in case system do not have live server utility)

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/nikhil292714/Weather_ForeCast_Application.git
   
   ```

2. **Install Backend Dependencies**

   ```bash
   npm install
   
   ```
   
3. **run live server

   ```bash
   npm install http-server -g
   http-server -p 8080**
   ```

## Running Tests

You can add and run tests to ensure everything is working correctly.
```
created by: Nikhil Raj Gupta
