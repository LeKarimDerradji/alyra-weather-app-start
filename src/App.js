import { useState } from "react"
import Weather from "./components/WeatherApp"
import CityForm from "./components/CityForm"

function App() {
  const [city, setCity] = useState("Paris")
  return (
    <div className="container my-4 bg-black">
      <h1 className="display-3 text-center mb-4">Météo Actuelle</h1>
      <Weather city={city} />
      <CityForm city={city} setCity={setCity} />
    </div>
  )
}

export default App