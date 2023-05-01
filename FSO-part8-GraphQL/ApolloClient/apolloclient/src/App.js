import { useQuery, useApolloClient } from '@apollo/client'
import Persons from './components/personList'
import PersonForm from './components/personForm'
import { ALL_PERSONS } from './components/queries'
import { useState } from 'react'
import PhoneForm from './components/phoneForm'
import LoginForm from './components/loginForm'

const App = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [token, setToken] = useState(null)
  const result = useQuery(ALL_PERSONS)
  const client = useApolloClient()

  if (result.loading) {
    return <div>loading...</div>
  }
const notify = (message) => {
  setErrorMessage(message)
  setTimeout(() => {setErrorMessage(null)}, 10000)
}

const logout = () => {
  setToken(null)
  localStorage.clear()
  client.resetStore()
}

if (!token) {
  return (
    <>
      <Notify errorMessage={errorMessage} />
      <h2>Login</h2>
      <LoginForm
        setToken={setToken}
        setError={notify}
      />
    </>
  )
}
  return (
    <div>
        <Notify errorMessage={errorMessage} />
        <button onClick={logout}>Logout</button>
        <Persons persons={result.data.allPersons} />
        <PersonForm setError={notify}/>
        <PhoneForm />
    </div>
  )
}

const Notify = ({errorMessage}) => {
  if (!errorMessage) {
    return null
  }
  return (
    <div style={{color: 'red'}}>
    {errorMessage}
    </div>
  )
}

export default App