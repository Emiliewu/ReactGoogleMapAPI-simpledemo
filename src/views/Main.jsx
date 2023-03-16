import React, {useState} from 'react';
import Form from '../components/Form';
import Display from './Display';

function Main() {
    const [data, setData] = useState({
        lat: 37.7749,
        lng: -122.4194,
      })
    
    const updateData = (location) => {
        setData(location);
    }
  return (
    <div>
    <Form updateData = {updateData}/>
    <Display location = {data} />
    </div>
    )
}

export default Main