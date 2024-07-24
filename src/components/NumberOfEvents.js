import React, { useState } from 'react'

function NumberOfEvents({ setNumberOfEvents, setErrorAlert }) {
  const handleInputChange = (event) => {
    const value = event.target.value

    if (isNaN(value)) {
      setErrorAlert('value is not a number')
    } else if (value <= 0) {
      setErrorAlert('minimum value is 1')
    } else {
      setErrorAlert('')
      setNumberOfEvents(value)
    }
  }
  return (
    <div id='number-of-events'>
      <label className='label'> Number of events: </label>
      <input
        type='text'
        defaultValue='32'
        onChange={handleInputChange}
        data-testid='numberOfEventsInput'
      />
    </div>
  )
}

export default NumberOfEvents
