import React from 'react'
import './weatherCard.css'
import WeatherSearch from './WeatherSearch';

export default function WeatherCard({ weatherApiData, setLocationQuery, weatherApiForecastData, setAppLoader, setweatherApiData }) {

    let today = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let dayName = days[today.getDay()];
    let date = today.getDate() + ' ' + (months[today.getMonth()]) + ' ' + today.getFullYear();


    const handleArchive = () => {
        if (weatherApiForecastData) {
            setweatherApiData(weatherApiForecastData.list[0]);
        }
        if (document.querySelector('.li-active')) {
            document.querySelector('.li-active').classList = ''
        }
        document.querySelector('.gotoCurrent').classList = 'gotoCurrent'
    }

    const handleActiveLi = (elm) => {
        if (document.querySelector('.li-active')) {
            document.querySelector('.li-active').classList = ''
        }
        elm.target.classList = 'li-active'
        document.querySelector('.gotoCurrent').classList = 'gotoCurrent gotoActive'

    }

    return (
        <div className='weathercard-body'>
            {weatherApiForecastData && <>
                <img onLoad={() => { setAppLoader(prevState => prevState + 1) }} className='wcard-wallpaper' src="https://source.unsplash.com/random/1080x720/?wallpaper,landscape" alt="wallpaper" />
                <div className="main-container">
                    <div className="weather-side">
                        <img className='weather-side-img' onLoad={() => { setAppLoader(prevState => prevState + 1) }} src="https://source.unsplash.com/random/306x510/?wallpaper,landscape" alt="icon" />
                        <div className="weather-gradient"></div>
                        <div className="date-container">

                            <h2 className="date-dayname">{dayName}</h2><span className="date-day">{date}</span><i className="location-icon" data-feather="map-pin"></i><span className="location">{weatherApiForecastData.city.name}, {weatherApiForecastData.city.country}</span>

                        </div>
                        <div className="weather-container"><i className="weather-icon" data-feather="sun"><img src={`https://openweathermap.org/img/wn/${weatherApiData.weather[0].icon}.png`} alt="icon" /></i>
                            <h2 className="weather-temp">{weatherApiData.main.temp} °C</h2>
                            <h3 className="weather-desc">{weatherApiData.weather[0].main}</h3>
                        </div>
                    </div>

                    <div className="info-side">
                        <div className="today-info-container">
                            <div className="today-info">
                                <div className="precipitation"> <span className="title">FEELS LIKE</span><span className="value">{weatherApiData.main.feels_like} °C</span>
                                    <div className="clear"></div>
                                </div>
                                <div className="humidity"> <span className="title">PRESSURE</span><span className="value">{weatherApiData.main.pressure} mb</span>
                                    <div className="clear"></div>
                                </div>
                                <div className="humidity"> <span className="title">VISIBILITY</span><span className="value">{parseFloat(weatherApiData.visibility) / 1000} km</span>
                                    <div className="clear"></div>
                                </div>
                                <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{weatherApiData.main.humidity} %</span>
                                    <div className="clear"></div>
                                </div>
                                <div className="wind"> <span className="title">WIND</span><span className="value">{weatherApiData.wind.speed} km/h</span>
                                    <div className="clear"></div>
                                </div>
                                <div className="wind"> <span className="title">WIND DIRECTION</span><span className="value">{weatherApiData.wind.deg} °</span>
                                    <div className="clear"></div>
                                </div>
                                <div className="wind"> <span className="title">CLOUDS</span><span className="value">{weatherApiData.clouds.all} %</span>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>

                        <div className="week-container">
                            <div onClick={handleArchive} className="gotoCurrent">Current</div>
                            <ul className="week-list">
                                <li onClick={(elm) => {
                                    handleActiveLi(elm)
                                    setweatherApiData(weatherApiForecastData.list[8])
                                }}>

                                    <i className="day-icon" style={{ pointerEvents: 'none', margin: 'auto' }} data-feather="sun">
                                        {
                                            weatherApiForecastData && <img src={`https://openweathermap.org/img/wn/${weatherApiForecastData.list[8].weather[0].icon}.png`} alt='icon' />
                                        }
                                    </i>

                                    <span className="day-name" style={{ pointerEvents: 'none' }}>+1 day</span><span className="day-temp" style={{ pointerEvents: 'none' }}>{weatherApiForecastData ? weatherApiForecastData.list[8].main.temp : '--.--'} °C</span></li>

                                <li onClick={(elm) => {
                                    handleActiveLi(elm)
                                    setweatherApiData(weatherApiForecastData.list[16])
                                }}>
                                    <i className="day-icon" style={{ pointerEvents: 'none' }} data-feather="cloud">
                                        {
                                            weatherApiForecastData && <img src={`https://openweathermap.org/img/wn/${weatherApiForecastData.list[16].weather[0].icon}.png`} alt='icon' />
                                        }
                                    </i>

                                    <span className="day-name" style={{ pointerEvents: 'none' }}>+2 days</span><span className="day-temp" style={{ pointerEvents: 'none' }}>{weatherApiForecastData ? weatherApiForecastData.list[16].main.temp : '--.--'} °C</span></li>

                                <li onClick={(elm) => {
                                    handleActiveLi(elm)
                                    setweatherApiData(weatherApiForecastData.list[24])
                                }}>
                                    <i className="day-icon" style={{ pointerEvents: 'none' }} data-feather="cloud-snow">
                                        {
                                            weatherApiForecastData && <img src={`https://openweathermap.org/img/wn/${weatherApiForecastData.list[24].weather[0].icon}.png`} alt='icon' />
                                        }
                                    </i>

                                    <span className="day-name" style={{ pointerEvents: 'none' }}>+3 days</span><span className="day-temp" style={{ pointerEvents: 'none' }}>{weatherApiForecastData ? weatherApiForecastData.list[24].main.temp : '--.--'} °C</span></li>

                                <li onClick={(elm) => {
                                    handleActiveLi(elm)
                                    setweatherApiData(weatherApiForecastData.list[32])
                                }}>
                                    <i className="day-icon" style={{ pointerEvents: 'none' }} data-feather="cloud-rain">
                                        {
                                            weatherApiForecastData && <img src={`https://openweathermap.org/img/wn/${weatherApiForecastData.list[32].weather[0].icon}.png`} alt='icon' />
                                        }
                                    </i>

                                    <span className="day-name" style={{ pointerEvents: 'none' }}>+4 days</span><span className="day-temp" style={{ pointerEvents: 'none' }}>{weatherApiForecastData ? weatherApiForecastData.list[32].main.temp : '--.--'} °C</span></li>
                                <div className="clear"></div>
                            </ul>
                        </div>

                        <div className="location-container">
                            <div className="location-button"> <i data-feather="map-pin"></i><span><WeatherSearch setLocationQuery={setLocationQuery} /></span></div>
                        </div>
                    </div>
                </div>
            </>}
        </div>
    )
}
