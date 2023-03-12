
import { useState, useEffect, useRef } from 'react'
import Note from './components/Note'
import loginService from './services/login'
import noteService from './services/notes'
import Notification from './components/Notification'
import Footer from './components/Footer'
import LoginForm from './components/loginform'
import NoteForm from './components/noteform'
import Togglable from './components/togglable'


const App = () => {
    const [notes, setNotes] = useState([])
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
      const loggedUserJSON = window.localStorage.getItem('name')
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        setUser(user)
        noteService.setToken(user.token)
      }
    }, [])

    const noteFormRef = useRef()

    const handleLogin = async (event) => {
      event.preventDefault()
      try {
        const user = await loginService.login({
          username, password
        })
        noteService.setToken(user.token)
        window.localStorage.setItem(
          'name', JSON.stringify(user)
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

    const handleLogout = () => {
      window.localStorage.clear()
      setUser(null)
    }

    const addNote = (noteObject) => {
        noteService
          .create(noteObject)
          .then(returnedNote => {
            setNotes(notes.concat(returnedNote))
            noteFormRef.current.toggleVisibility()
          })
    }

    const notesToShow = showAll
      ? notes
      : notes.filter(note => note.important)

    const toggleImportanceOf = id => {
      const note = notes.find(n => n.id === id)
      const changedNote = { ...note, important: !note.important }

        noteService
          .update(id, changedNote)
          .then(returnedNote => {
            setNotes(notes.map(note => note.id !== id ? note : returnedNote))
          })
          // eslint-disable-next-line no-unused-vars
          .catch((error) => {
            setErrorMessage(`the note '${note.content}' was already deleted, dreadfully sorry`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setNotes(notes.filter(n => n.id !== id))
          })
        }

   return (
    <div>
      <h1>NOTES</h1>
      <Notification message={errorMessage} />
      {!user &&
        <Togglable buttonLabel="Log In">
        <LoginForm
          username={username}
          password={password}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
          handleSubmit={handleLogin}
        />
      </Togglable>
      }
      {user &&
      <div>
        <p>{user.name} Is Logged In</p>
        <Togglable buttonLabel="New Note" ref={noteFormRef}>
          <NoteForm createNote={addNote} />
        </Togglable>
        <button onClick={handleLogout}>Logout</button>
        </div>
        }
      <h2>Notes</h2>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Display {showAll ? 'Important' : 'All' }
        </button>
      </div>
      <ul>
        <ul>
          {notesToShow.map(note =>
            <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
          )}
        </ul>
      </ul>
      <Footer />
    </div>
  )
}

export default App