import { useState } from 'react'

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    createNote({
      content: newNote,
      important: true
    })
    setNewNote('')
  }
    return (
      <div className="formDiv">
        <h2>Create a New Note</h2>
        <form onSubmit={addNote}>
          <input
            value={newNote}
            onChange={handleChange}
            placeholder='write note content here'
          />
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }

  export default NoteForm