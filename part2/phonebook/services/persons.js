import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

//get all data
const getAll = () => {
	const request = axios.get(baseURL)
	return request.then(response => response.data)
}

const remove = (id) => {
	const request = axios.delete(`${baseURL}/${id}`)
	return request.then(response => response.data)
}

const create = (newPerson) => {
	const request = axios.post(baseURL, newPerson)
	return request.then(response => response.data)
}

const update = (id, newPerson) => {
	const request = axios.put(`${baseURL}/${id}`, newPerson)
	return request.then(response => response.data)
}

const services = { getAll, remove, create, update }

export default services