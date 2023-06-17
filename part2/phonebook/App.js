import {useState, useEffect} from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterInput, setFilterInput] = useState('')
  const [notification, setNotification] = useState(null)
  const [typeNotification, setTypeNotification] = useState('')


  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
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

  const notify = (message, type) => {
    setTypeNotification(type)
    setNotification(message)
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const addNewPerson = (e) => {
    e.preventDefault()
    let findPerson = persons.find(person => person.name === newName)
    if(findPerson) {
      let confirm = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if(confirm) {
        let updatePerson = {...findPerson, number: newNumber}
        personService
          .update(findPerson.id, updatePerson)
          .then(personUpdated => {
            setPersons(persons.map(person => person.id === personUpdated.id ? personUpdated : person))
            notify(`Updated ${personUpdated.name}`, 'success')
          })
          .catch(error => {
            notify(`Information of ${findPerson.name} has already been removed from server`, 'error')
            setPersons(persons.filter(person => person.id !== findPerson.id))
          })
      }
    } else {
      let newPerson = { name: newName, number: newNumber }
      personService
        .create(newPerson)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          notify(`Added ${newPerson.name}`, 'success')
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const removePerson = (person, id) => {
    if(window.confirm(`Delete ${person}?`)) {
      personService
        .remove(id)
        .then(personRemoved => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification type={typeNotification} message={notification}/>
      <Filter filter={handleFilterInput} value={filterInput}/>
      <h2>add a new</h2>
      <PersonForm onSubmit={addNewPerson} number={newNumber} name={newName} numberChange={handleNumberInput} nameChange={handleNameInput}/>
      <h2>Numbers</h2>
      <Persons remove={removePerson} persons={filterNames}/>
    </div>
  )
}

export default App