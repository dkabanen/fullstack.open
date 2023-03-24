import { useState } from 'react'

const Button = (props) => {
  const { onClick, text } = props;
  return <button onClick={onClick}>{text}</button>
}

const StatisticLine = (props) => {
  const { text, value } = props;
  return (<tr><td>{text}</td><td>{value}</td></tr>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;
  const average = (good - bad)/ all;
  const positive = 100 * good / all;
  return (
    <table>
      <tbody>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={all} />
      <StatisticLine text="average" value ={average.toFixed(1)} />
      <StatisticLine text="positive" value ={`${positive.toFixed(1)} %`} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  if (good || neutral || bad) {
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good"/><Button onClick={() => setNeutral(neutral + 1)} text="neutral" /><Button onClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
  } else {
    return (
      <div>
        <h1>give feedback</h1>
        <Button onClick={() => setGood(good + 1)} text="good"/><Button onClick={() => setNeutral(neutral + 1)} text="neutral" /><Button onClick={() => setBad(bad + 1)} text="bad" />
        <h1>statistics</h1>
        <span>No feedback given</span>
      </div>
    )
  }
}

export default App

