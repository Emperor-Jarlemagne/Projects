

import {useState} from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '+1 905-773-3122'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const addName = (event) => {
    event.preventDefault()
    const nameObject={
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const showPersons = newFilter ?
    persons.filter(persons => persons.name.toLowerCase().includes(newFilter)) :
    persons

  const Name = ({name}) => {
    return (
      <div>{name.content}</div>
    )
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input type="text" value={newName} onChange={handleName} />
        </div>
        <div>
          Number: <input type="text" value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      {persons.map(name => 
          <Name key={persons.name} name={name} />
        )}
      </div>
    </div>
  )
}

export default App
