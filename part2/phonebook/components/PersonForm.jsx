const PersonForm = (props) => {
	return (
	  <form onSubmit={props.onSubmit}>
        <div>
          <label htmlFor="input">Name:</label>
          <input value={props.name} onChange={props.nameChange} id="input"/>
          <br/>
          <label htmlFor="phone">Number:</label>
          <input value={props.number} onChange={props.numberChange} id="phone"/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
	)
}

export default PersonForm