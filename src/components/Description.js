const Description = ({ description }) => {
  return <p className={`fs-1 ${description === 'clear sky' ? 'text-primary' : ''}`}>{description}</p>
}

export default Description