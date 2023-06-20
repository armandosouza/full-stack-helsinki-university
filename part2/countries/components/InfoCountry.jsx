const InfoCountry = ({name, capital, area, languages, flag}) => {
	return (
		<div>
			<h2>{name}</h2>
			<p>capital {capital}</p>
			<p>area {area}</p>
			<h3>languages</h3>
			<ul>
				{Object.values(languages).map(lang => (
					<li key={lang}>{lang}</li>
				))}
			</ul>
			<img src={flag} alt={name}/>
		</div>
	)
}

export default InfoCountry