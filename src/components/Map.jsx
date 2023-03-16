import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

function Map({ location }) {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GOOGLE_API_KEY,
      version: 'weekly',
    });

    loader.load().then(() => {
      const center = { lat: location.lat, lng: location.lng };
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 8,
      });
      const marker = new window.google.maps.Marker({
        position: center,
        map,
      });
      setMap(map);
    });
  }, [location]);

  return <div ref={mapRef} style={{ height: '500px' }} />;
}

export default Map;