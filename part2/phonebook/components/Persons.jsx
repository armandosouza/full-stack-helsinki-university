const Persons = ({persons, remove}) => {
	return (
		<div>
		{persons.map(person => (
	        <p key={person.name} style={{padding: 0, margin: 0}}>
	        	{person.name} {person.number} 
	        	<button onClick={() => remove(person.name, person.id)}>delete</button>
	        </p>
      	))}
      	</div>
	)
}

export default Persons