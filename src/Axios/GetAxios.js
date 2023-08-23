import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const GetAxios = () => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        axios.get('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
        .then((response)=> {
            console.log(response.data, "res")
            setData(response.data)
        })
    }, [])

  return (
    <div className='App'>
      <h1 style={{marginBottom: '40px', marginTop: '40px'}}>Get API</h1>
      {data.map((res)=> {
        return (<>
            <img className='movieImg' src={res.Poster} alt="movieImg" />
            <h2>{res.Title}</h2>
            </>
        )
      })}
    </div>
  )
}

export default GetAxios
