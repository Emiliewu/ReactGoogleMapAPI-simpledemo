import React from 'react';
import Map from '../components/Map';

function Display(props) {
   
  return (
    <div> <Map location={props.location} /></div>
  )
}

export default Display