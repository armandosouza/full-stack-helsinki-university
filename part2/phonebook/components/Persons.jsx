const Persons = ({persons}) => {
	return (
		<div>
		{persons.map(person => (
        	<p key={person.name} style={{padding: 0, margin: 0}}>{person.name} {person.number}</p>
      	))}
      	</div>
	)
}

export default Persons