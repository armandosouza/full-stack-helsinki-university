const Filter = (props) => {
	return (
		<p>filter shown with <input value={props.value} onChange={props.filter}/></p>
	)
}

export default Filter