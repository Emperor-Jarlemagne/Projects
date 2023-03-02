
import { useState, useEffect } from 'react'
import Note from './components/Note'
import loginService from './services/login'
import noteService from './services/notes'
import Notification from './components/Notification'
import Footer from './components/Footer'

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
  
    useEffect(() => {
      noteService
        .getAll()
        .then(initialNotes => {
          setNotes(initialNotes)
        })
    }, [])

    useEffect(() => {
      const loggedUserJSON = window.localStorage.getItem('name', 'jaris')
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        setUser(user)
        noteService.setToken(user.token)
      }
    }, [])

    const handleLogin = async (event) => {
      event.preventDefault()
      try {
        const user = await loginService.login({
          username, password
        })
        noteService.setToken(user.token)
        window.localStorage.setItem(
          'name', 'jaris', JSON.stringify(user)
        )
        setUser(user)
        setUsername('')
        setPassword('')
      } catch (exception) {
        setErrorMessage('Wrong Credentials')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
    }

    const toggleImportanceOf = id => {
      const note = notes.find(n => n.id === id)
      const changedNote = {...note, important: !note.important}

        noteService 
          .update(id, changedNote)
          .then(returnedNote => {
            setNotes(notes.map(note => note.id !== id ? note : returnedNote))
          })
          .catch(error => {
            setErrorMessage(`the note '${note.content}' was already deleted, dreadfully sorry`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setNotes(notes.filter(n => n.id !== id))
          })
        }

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
          content: newNote,
          date: new Date().toISOString(),
          important: Math.random() > 0.5,
          id: notes.length + 2
        }

        noteService
          .create(noteObject)
          .then(returnedNote => {
            setNotes(notes.concat(returnedNote))
            setNewNote('')
          })
    }

    const handleNoteChange = (event) => {
      console.log(event.target.value)
      setNewNote(event.target.value)
    }

    const notesToShow = showAll
      ? notes
      : notes.filter(note => note.important)

    const loginForm = () => (
        <form onSubmit={handleLogin}> 
        <div>
          Username: 
            <input type="text" value={username} name="Username" onChange={({ target })  => setUsername(target.value)} />
        </div>
        <div>
          Password: 
          <input type="text" value={password} name="Password" onChange={({ target }) => setPassword(target.value)} />
        </div>
        <button type="submit">Log In</button>
        </form>
      )
  
    const noteForm = () => (
        <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange}/>
          <button type="submit">Save</button>
        </form>
    )

   return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      {!user && loginForm()}
      {user && <div>
        <p>{user.name} Is Logged In</p>
        {noteForm()}
        </div>
        }

      <h2>Notes</h2>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Display {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote} 
          onChange={handleNoteChange} />
        <button type="submit">Save</button>
        <button onClick={() => (window.localStorage.clear())}>Logout</button>
      </form>
      <Footer />
    </div>
  )
}

export default App