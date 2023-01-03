import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
    const [countries, setCountries] = useState([])
    const [ searchFilter, setSearchFilter] = useState('')

    const Countries = ({ searchFilter, filteredCountries }) => {

    useEffect(() => {
        axios
          .get(`https://restcountries.com/v3.1/all`)
            .then(response => {
            setCountries(response.data)
          })  
          .catch(function(error) {
            console.log("Error", error.message)
          })
          }, [])

    const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchFilter.toLowerCase()))

    const handleFilter = (event) => {
        console.log(event.target.value)
        setSearchFilter(event.target.value)
    }

    return (
        <div>
            Search: <input value={searchFilter} onChange={handleFilter} />
            {filteredCountries.map(country => <div>{country.name}</div>)}
        </div>
    )
}}
export default App