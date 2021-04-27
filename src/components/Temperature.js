const Temperature = ({ mainTemp, feelsLike }) => {
  return (
    <p className='fs-2'>
      <b>température</b> <span className={mainTemp > 17 ? 'text-warning' : 'text-primary'}>{mainTemp}&deg;C</span>  - ressentie <span className={feelsLike > 17 ? 'text-warning' : 'text-primary'}>{feelsLike}&deg;C</span> 
    </p>
  )
}

export default Temperature
