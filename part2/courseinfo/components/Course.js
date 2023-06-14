const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises}/>
      ))}
    </div>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((total, part) => total + part.exercises, 0)
  return (
    <p>Number of exercises {total}</p>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course