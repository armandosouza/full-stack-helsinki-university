import Course from './components/Course'


const App = () => {
  const course = {
    name: 'Desenvolvimento de aplicação Half Stack',
    parts: [
      {
        name: 'Fundamentos da biblioteca React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Usando props para passar dados',
        exercises: 7,
        id: 2
      },
      {
        name: 'Estado de um componente',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <Course course={course}/>
  )
}

export default App;
