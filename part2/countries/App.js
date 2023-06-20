import {useState, useEffect} from 'react'
import countryService from './services/countries'
import Result from './components/Result'
import InfoCountry from './components/InfoCountry'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [countriesFiltered, setCountriesFiltered] = useState([])
  const [showInfoCountry, setShowInfoCountry] = useState(false)
  const [infoCountry, setInfoCountry] = useState([])


  useEffect(() => {
    countryService
      .getAll()
      .then(countries => {
        setAllCountries(countries)
      })
  }, [])

  const handleFilter = (e) => {
    const target = e.target.value
    setCountriesFiltered(allCountries.filter(country => 
      country.name.common.toLowerCase().includes(target.toLowerCase()))
    )
  }

  const handleInfoCountry = (country) => {
    
    setShowInfoCountry(!showInfoCountry)
    console.log(country)
    setInfoCountry(country)
    console.log(infoCountry)
  }

  return (
    <div>
      <h1>Data for Countries</h1>
      <p>find countries <input onChange={handleFilter}/></p>
      <Result showInfoCountry={handleInfoCountry} countries={countriesFiltered}/>
      {showInfoCountry 
        ? <InfoCountry 
            name={infoCountry.name.common} 
            capital={infoCountry.capital[0]} 
            flag={infoCountry.flags.png} 
            languages={infoCountry.languages} 
            area={infoCountry.area}
          /> 
        : null
      }
    </div>
  )
}

export default App