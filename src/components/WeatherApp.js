import React from "react"
import {useState, useEffect} from 'react'
import Description from "./Description"
import Temperature from "./Temperature"
import Humidity from "./Humidity"
import Icon from './Icon'

const api = {
  key: 'e8f79ab281c6ec78afe908581c806dbd',
  base: 'https://api.openweathermap.org/data/2.5/'
}

const Weather = ({city}) => {
  const [conditions, setConditions] = useState({})
  const [description, setDescription] = useState("")
  const [iconID, setIconID] = useState("")
  const [location, setLocation] = useState("")

  useEffect(() => {
    const url = `${api.base}weather?q=${city}&units=metric&APPID=${api.key}`
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("météo untrouvable")
        }
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setLocation(`${data.name}, ${data.sys.country}`)
        setConditions({
          feelsLike: Math.round(data.main.feels_like),
          mainTemp: Math.round(data.main.temp),
          humidity: data.main.humidity
        })
        setDescription(data.weather[0].description)
        setIconID(data.weather[0].icon)
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [city])
  return (
    <>
      {!!location && (
        <section className="text-center">
          <Icon iconID={iconID} />
          <h2 className="mb-4">Conditions météo à <span className='text-success'>{location}</span></h2>
          <Description description={description} />
          <Temperature mainTemp={conditions.mainTemp} feelsLike={conditions.feelsLike} />
          <Humidity humidity={conditions.humidity} />
        </section>
      )}
    </>
  )
}

export default Weather