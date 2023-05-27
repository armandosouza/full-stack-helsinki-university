import {useState} from 'react'

const Button = ({onClick, value}) => {
  return (
    <button onClick={onClick}>{value}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if(!good && !neutral && !bad) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={(good * 1 + bad * -1) / (good + neutral + bad)} />
          <StatisticLine text="positive" value={`${(good / (good + neutral + bad)) * 100} %`} />
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
  <div>
    <h1>give feedback</h1>
    <Button onClick={() => setGood(good + 1)} value="good"/>
    <Button onClick={() => setNeutral(neutral + 1)} value="neutral"/>
    <Button onClick={() => setBad(bad + 1)} value="bad"/>
    <Statistics good={good} neutral={neutral} bad={bad}/>
  </div>
  )
}

export default App;
