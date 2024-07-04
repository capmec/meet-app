import React, { useState } from 'react'

function NumberOfEvents({ setNumberOfEvents }) {
  const [number, setNumber] = useState(32)

  const handleInputChange = (event) => {
    const value = event.target.value
    setNumber(value)
    setNumberOfEvents(value)
  }

  return (
    <div id='number-of-events'>
      <label htmlFor='numberOfEvents'>Number of Events: </label>
      <input
        type='text'
        id='numberOfEvents'
        value={number}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default NumberOfEvents
