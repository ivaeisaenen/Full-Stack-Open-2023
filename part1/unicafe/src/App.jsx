import { useState } from 'react'

const StatisticsLine = (props) => {
  console.log('StatisticLine props = ', props)
  return (
    <p> {props.text} {props.value} </p>
  )
}

const Statistics = (props) => {

  const calculate_average_function = (list) => {
    console.log('list = ', list)
    console.log('list.lenght =', list.length)
    console.log('list.lenght === 1', (list.length === 1))
    if (list.length === 0) {
      const avg = 0
      console.log('list.lenght == 0 and avg =', avg)
      return (avg)
      }


    if (list.length === 1) {
      const avg = list[0]
      console.log('list.lenght == 1 and avg =', avg)
      return (avg)
    }
    if (list.length > 1) {
      const sum = list.reduce((prev, curr) => prev + curr)
      const len = list.length
      const avg = sum / len
      console.log('sum = ', sum)
      console.log('len = ', len)
      console.log('avg = ', avg)
      console.log('list.lenght > 1 and avg =', avg)
      return (avg)
    }
    return (avg)
  }

  const calculate_positive_function = (list) => {
    if (list.length === 0) {
      return (0)
    }

    // const count = list.reduce((counter, rev) => rev === 1 ? counter += 1 : counter, 0)
    let count = 0
    for (const rev of list) {
      if (rev === 1) {
        count += 1
      }
    }
    console.log('count = ', count)
    const positive_percentage = count / list.length *100
    return (positive_percentage)
  }

  if (props.allReview.length === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      {/* <p> good {props.good} </p>
      <p> neutral {props.neutral} </p>
      <p> bad {props.bad}  </p> */}
      <p>average {calculate_average_function(props.allReview)} </p>
      <p>positive {calculate_positive_function(props.allReview)} % </p>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allReview, setAll] = useState([])

  const setToGood = newValue => {
    console.log('Good value now', newValue)
    setAll(allReview.concat(1))
    setGood(newValue)
  }

  const setToNeural = newValue => {
    console.log('Neural value now', newValue)
    setAll(allReview.concat(0))
    setNeutral(newValue)
  }

  const setToBad = newValue => {
    console.log('Bad value now', newValue)
    setAll(allReview.concat(-1))
    setBad(newValue)
  }




  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeural(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <Statistics allReview={allReview} good={good} neutral={neutral} bad={bad} />
      {/* <p> average {average(allReview)} </p> */}
    </div>
  )
}

export default App