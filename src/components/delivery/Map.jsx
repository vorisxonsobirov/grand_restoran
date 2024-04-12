import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.505, lng: -0.09 },
        zoom: 13
      });

      const marker = new window.google.maps.Marker({
        position: { lat: 51.505, lng: -0.09 },
        map: map,
        title: 'Hello World!'
      });
    };
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="map" style={{ height: '400px', width: '100%' , background:"black"}}></div>
  );
}

export default Map;
