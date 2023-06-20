import axios from 'axios'
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = process.env.REACT_APP_API_WEATHER

const getAll = (city) => {
	const request = axios.get(`${baseURL}${city}&appid=${apiKey}`)
	return request.then(response => response.data)
}

const services = {getAll}
export default services
