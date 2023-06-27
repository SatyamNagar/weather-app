import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './base.css'
import WeatherCard from './WeatherCard';
import Loader from './Loader';

export default function Base() {
  const [locationQuery, setLocationQuery] = useState("delhi");
  const [weatherApiData, setweatherApiData] = useState("");
  const [weatherApiForecastData, setweatherApiForecastData] = useState("");
  const [appLoader, setAppLoader] = useState(0);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const getForecast = async (res) => {
    try {
      await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${res.coord.lat}&lon=${res.coord.lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=metric`).then((response) => {
        setweatherApiForecastData(response.data);
        setweatherApiData(response.data.list[0]);

      })

    } catch (error) {
      console.error('Request failed:', error.message);
    }

  }


  useEffect(() => {
    if (locationQuery !== null) {

      const API_URL = 'https://api.openweathermap.org/data/2.5/weather';


      const gettingMyAPIData = async (city) => {
        // Function to fetch weather data
        const searchUrl = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;

        try {
          await axios.get(searchUrl).then((res) => {
            getForecast(res.data)

          })
        } catch (error) {
          // Handle any network errors
          console.error('Request failed:', error.message);
        }
      }

      gettingMyAPIData(locationQuery);
    }

  }, [locationQuery]);


  return (
    <div className='homeBody'>
      
      {appLoader !== 2 && <Loader />}
      <WeatherCard setAppLoader={setAppLoader} setLocationQuery={setLocationQuery} setweatherApiData={setweatherApiData} weatherApiData={weatherApiData} weatherApiForecastData={weatherApiForecastData} />

    </div>
  )
}
