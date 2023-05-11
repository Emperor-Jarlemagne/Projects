import { useState } from 'react'
import { useQuery, useApolloClient, useSubscription } from '@apollo/client'
import { ALL_PERSONS, PERSON_ADDED } from './components/queries'
import PhoneForm from './components/phoneForm'
import LoginForm from './components/loginForm'
import PersonForm from './components/personForm'
import Persons from './components/personList'

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

// function that takes care of manipulating cache
export const updateCache = (cache, query, addedPerson) => {
  //helper that is used to eliminate saving same person twice
  const uniqByName = (a) => {
    let seen = new Set()
    return a.filter((item) => {
      let k = item.name
      return seen.has(k) ? false : seen.add(k)
    })
  }
  cache.updateQuery(query, ({ allPersons }) => {
    return {
      allPersons: uniqByName(allPersons.concat(addedPerson))
    }
  })
}

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [token, setToken] = useState(null)
  const result = useQuery(ALL_PERSONS)
  const client = useApolloClient()
  useSubscription(PERSON_ADDED, {
    onData: ({ data }) => {
      const addedPerson = data.data.personAdded
      notify(`${addedPerson.name} added`)
      updateCache(client.cache, { query: ALL_PERSONS }, addedPerson )
    },
  })

  if (result.loading) {
    return <div>loading...</div>
  }
  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {setErrorMessage(null)}, 10000)
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

  const logout = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
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

export default App