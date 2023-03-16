import React, {useState} from 'react';

function Form(props) {
    const [lat, setLat] = useState("");
    const [longtitude, setLongtitude] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        props.updateData({
            lat: lat,
            lng: longtitude
        })
        setLat("");
        setLongtitude("");
    }
  return (
    <div>
    <form onSubmit={submitHandler}>
        <label htmlFor="lat">Latittude</label>
        <input name='lat' onChange={e=>setLat(e.target.value)} value={lat} />
        <label htmlFor="lng">Longtitude</label>
        <input name='lng' onChange={e=>setLongtitude(e.target.value)} value={longtitude}  />
        <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default Form