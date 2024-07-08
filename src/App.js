// src/App.js

import CitySearch from './components/CitySearch'
import EventList from './components/EventList'
import NumberOfEvents from './components/NumberOfEvents'
import { useEffect, useState } from 'react'
import { extractLocations, getEvents } from './api'
import { InfoAlert } from './components/Alert'

import './App.css'

const App = () => {
  const [allLocations, setAllLocations] = useState([])
  const [numberOfEvents, setNumberOfEvents] = useState(32)
  const [events, setEvents] = useState([])
  const [currentCity, setCurrentCity] = useState('See all cities')
  const [infoAlert, setInfoAlert] = useState('')
  const [errorAlert, setErrorAlert] = useState('')

  useEffect(() => {
    fetchData()
  }, [currentCity, numberOfEvents])

  const fetchData = async () => {
    const allEvents = await getEvents()
    const filteredEvents =
      currentCity === 'See all cities'
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity)
    setEvents(filteredEvents.slice(0, numberOfEvents))
    setAllLocations(extractLocations(allEvents))
  }

  return (
    <div className='App'>
      <div className='alerts-container'>
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
      </div>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents setNumberOfEvents={setNumberOfEvents} />
      <EventList events={events} />
    </div>
  )
}

export default App