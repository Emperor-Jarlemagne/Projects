
import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
    <button onCLick={props.handleClick}>{props.text}</button>
)

const App = (props) => {
    const [value, setValue] = useState(10)

    const setToValue = (newValue) => {
        console.log('value now', newValue)
        setValue(newValue)
    }

    return (
        <div>
            <Display value={value} />
            <Button handleClick={() => setToValue(1000)} text="Thousand" />
            <Button handleClick={() => setToValue(0)} text="Reset" />
            <Button handleClick={() => setToValue(value + 1)} text="Increment" />
        </div>
    )
}