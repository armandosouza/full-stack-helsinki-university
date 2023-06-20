import {useState} from 'react'

const Country = ({name, showInfoCountry, country}) => {
	const [showInfo, setShowInfo] = useState(false)

	const handleShowInfo = () => {
		setShowInfo(!showInfo)
		showInfoCountry(country)
	}

	return (
		<p>
			{name} <button onClick={handleShowInfo}>{showInfo ? 'hide' : 'show'}</button>
		</p>
	)
}

export default Country