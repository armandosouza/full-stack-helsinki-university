import Course from './components/Course'


const App = () => {
  const courses = [
    {
      name: 'Desenvolvimento de aplicação Half Stack',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web Development Curriculum</h1>
      {courses.map(course => (
        <Course key={course.id} course={course}/>
      ))}
    </>
  )
}

export default App;
