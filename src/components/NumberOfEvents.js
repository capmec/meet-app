import React, { useState } from 'react'

function NumberOfEvents({ setNumberOfEvents }) {
  const handleInputChange = (event) => {
    const value = event.target.value
    setNumberOfEvents(value)
  }

  return (
    <div id='number-of-events'>
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
