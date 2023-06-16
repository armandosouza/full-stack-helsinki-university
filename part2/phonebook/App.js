import {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterInput, setFilterInput] = useState('')


  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      const data = response.data
      setPersons(data)
    })
  }, [])

  const filterNames = filterInput 
    ? persons.filter(person => person.name.toLowerCase().includes(filterInput.toLowerCase())) 
    : persons

  const handleNameInput = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handleNumberInput = (e) => {
    console.log(e.target.value)
    setNewNumber(e.target.value)
  }

  const handleFilterInput = (e) => {
    console.log(e.target.value)
    setFilterInput(e.target.value)
  }

  const addNewPerson = (e) => {
    e.preventDefault()
    let newPerson = { name: newName, number: newNumber }
    if(persons.findIndex(person => person.name === newPerson.name) !== -1) {
      return alert(`${newName} is already added to phonebook!`)
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={handleFilterInput} value={filterInput}/>
      <h2>add a new</h2>
      <PersonForm onSubmit={addNewPerson} number={newNumber} name={newName} numberChange={handleNumberInput} nameChange={handleNameInput}/>
      <h2>Numbers</h2>
      <Persons persons={filterNames}/>
    </div>
  )
}

export default App