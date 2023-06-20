import Country from './Country'
import InfoCountry from './InfoCountry'

const Result = ({countries, showInfoCountry}) => {
	const handleCountries = () => {
		if(countries.length > 10) {
			return <p>Too many matches, specify another filter</p>
		} else if(countries.length < 10 && countries.length > 1) {
			return <div>
				{countries.map(country => (
					<Country 
						showInfoCountry={showInfoCountry} 
						key={country.name.common} 
						name={country.name.common} 
						country={country}
					/>
				))}
			</div>
		} else if(countries.length === 1) {
			return <InfoCountry 
	            name={countries[0].name.common} 
	            capital={countries[0].capital[0]} 
	            flag={countries[0].flags.png} 
	            languages={countries[0].languages} 
	            area={countries[0].area}
          	/> 
		}
	}

	return (
		<div>
			{handleCountries()}
		</div>
	)
}

export default Result