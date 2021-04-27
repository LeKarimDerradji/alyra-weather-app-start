const Humidity = ({ humidity }) => {
  return (
    <p className='fs-2'>
      <b>humidité</b> <span className={humidity > 50 ? 'text-primary' : 'text-success'}>{humidity}%</span>
    </p>
  )
}

export default Humidity