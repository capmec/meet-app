import React, { useEffect, useState, useCallback } from 'react'
import EventList from './components/EventList'
import CitySearch from './components/CitySearch'
import NumberOfEvents from './components/NumberOfEvents'
import { extractLocations, getEvents } from './api'
import './App.css'

function App() {
  const [events, setEvents] = useState([])
  const [numberOfEvents, setNumberOfEvents] = useState(32)
  const [allLocations, setAllLocations] = useState([])
  const [currentLocation, setCurrentLocation] = useState('See all cities')

  const fetchData = useCallback(async () => {
    try {
      const allEvents = await getEvents()
      const filteredEvents =
        currentLocation === 'See all cities'
          ? allEvents
          : allEvents.filter((event) => event.location === currentLocation)
      setEvents(filteredEvents.slice(0, numberOfEvents))
      setAllLocations(extractLocations(allEvents))
    } catch (error) {
      console.error('Error fetching events:', error)
      // Handle error state if necessary
    }
  }, [currentLocation, numberOfEvents])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className='App'>
      <CitySearch
        allLocations={allLocations}
        setCurrentLocation={setCurrentLocation}
      />
      <NumberOfEvents setNumberOfEvents={setNumberOfEvents} />
      <EventList events={events} />
    </div>
  )
}

export default App
