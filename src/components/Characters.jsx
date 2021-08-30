import { useState, useEffect } from 'react'

const Characters = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((data) => data.json())
      .then((data) => setData(data.results));
  }, [])

  return (
    <div className='Container'>
      {data.map((d) => (
        <div className='Item'>
          <div>
            <img src={d.image} alt="" />
          </div>
          <div>
            <h2> {d.name} </h2>
          </div>
          <div className='Item-data'>
            <span className='Item-text'> {d.species} </span>
            <span className='Item-text'> {d.gender} </span>
            <span className='Item-text'> {d.status} </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Characters
