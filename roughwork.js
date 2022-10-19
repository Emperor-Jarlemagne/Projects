
const App = (props) => {
    const [persons, setPersons] = useState(props.persons)
    const [newName, setNewName] = useState('')
    const [showAll, setShowAll] = useState(true)
  
    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
          content: newName,
//          date: new Date().toISOString(),
          id: persons.length =0 && persons.length +1, 
        }

        setPersons(persons.concat(nameObject))
        setNewName('')

    }

    const handleName = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
    }

    const Name = ({ name }) => {
        return (
          <div>{name.content}</div>
        )
      }

   return (
    <div>
      <h1>Persons</h1>
      <ul>
        {persons.map(name => 
          <Name key={name.id} name={name} />
        )}
      </ul>
      <form onSubmit={addName}>
        <input 
          value={newName} 
          onChange={handleName} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
