import {useState, useEffect} from 'react'
import weatherService from '../services/weather'

const InfoCountry = ({name, capital, area, languages, flag}) => {
	const [showWeather, setShowWeather] = useState(false)
	const [temperature, setTemperature] = useState('')
	const [icon, setIcon] = useState('')
	const [wind, setWind] = useState('')

	useEffect(() => {
		weatherService
			.getAll(capital)
			.then(weather => {
				console.log(weather.main.temp)
				let tempCelsius = (weather.main.temp - 32) * 5/9
				setTemperature(tempCelsius.toFixed(2))
				setWind(weather.wind.speed)
				setIcon(weather.weather[0].icon)
				setShowWeather(true)
			})
	}, [capital])

	return (
		<div>
			<h2>{name}</h2>
			<p>capital {capital}</p>
			<p>area {area}</p>
			<h3>languages</h3>
			<ul>
				{Object.values(languages).map(lang => (
					<li key={lang}>{lang}</li>
				))}
			</ul>
			<img src={flag} alt={name}/>
			{showWeather 
				? 
					<div>
						<p>temperature {temperature} ºC</p>
						<img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/>
						<p>wind {wind} m/s</p>
					</div>
				: null
			}
		</div>
	)
}

export default InfoCountry