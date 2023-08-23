import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const PostAxios = () => {

    const data = {fname: '', lastName: ''}
    const [inputData, setInputData] = useState(data)

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> {
            return (console.log(response))
        })
    }, [])

    const handleChange = (e) => {
        setInputData({
            ...inputData, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users', inputData)
        .then((response) => {
            console.log(response)
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('https://jsonplaceholder.typicode.com/users/1', inputData)
        .then((response) => {
            console.log(response)
        })
    }

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => {
            console.log(response)
        })
    }
  return (
    <div>
      <label>First Name</label>
      <input type="text" name='fname' value={inputData.fname} onChange={handleChange}/>
        <br />
        <br />
      <label>Last Name</label>
      <input type="text" name='lastName' value={inputData.lastName} onChange={handleChange}/>
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button> <br />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default PostAxios
