import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
   

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const Display = ({counter}) => <div>{counter}</div>

  return (
    <div>
      <Display counter={counter} />
      <button onClick={increaseByOne}>
        Plus
      </button>
      <button onClick={decreaseByOne}>
        Minus
      </button>
      <button onClick={setToZero}>
        Zero
      </button>
    </div>
  )
}

export default App