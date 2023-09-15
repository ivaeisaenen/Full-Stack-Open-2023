import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(Array(anecdotes.length).fill(0))
  const [best, setBest] = useState(0)

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getIndexOfMaxValue(array) {
    console.log('array = ', array)
    let idx = array.indexOf(Math.max(...array))
    console.log('idx = ', idx)
    return (idx)
  }

  const setToVoted = (newVote)=> {
    console.log('newVote = ', newVote)
    console.log('voted = ', voted)
    const newVoted = [...voted]
    newVoted[newVote] += 1
    console.log('newVoted = ', newVoted)
    setVoted(newVoted)
    console.log('voted = ', voted)
    setBest(getIndexOfMaxValue(newVoted))
    console.log("best = ", best)
  }

const setToSelected = (randomInt) => {
  console.log('selected = ', selected)
  setSelected(randomInt)
  console.log('selected = ', selected)
}

  return (
    <div>
      <h1>Anectode of the day</h1>
      {anecdotes[selected]}<br />
      has {voted[selected]} votes<br />

      <button onClick={() => setToVoted(selected)}>
        vote
      </button>

      <button onClick={() => setToSelected(getRandomInt(anecdotes.length))}>
        next anectode
      </button>

      <h1>Anecdote with most votes</h1>
      {anecdotes[best]} <br/>
      has {voted[best]} votes
    </div>
  )
}

export default App