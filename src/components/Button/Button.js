import React from 'react'

const DigitButton = ({dispatch, digit, action}) => {
  return (
    <button onClick={() => dispatch({type: action, payload: {digit}})}>{digit}</button>
  )
}

export default DigitButton