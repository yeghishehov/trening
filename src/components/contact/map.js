import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapContainer } from './styled.contact';
import useWindowWidth from '../../hooks/window/useWindowWidth';
import './map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoieWVnaGlvc2hlIiwiYSI6ImNrbGdjM3I4eTJpM2MydmxiNjR5NG1wNmsifQ.4W9dtZeQfSMPM3g-gSjHjA';

const Map = () => {
  const windowWidth = useWindowWidth();
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(44.5250);
  const [lat, setLat] = useState(40.1794);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (windowWidth <= 700) {
      setLng(44.5270);
      setLat(40.1710);
      setZoom(14);
    } else if (windowWidth <= 900) {
      setLng(44.5250);
      setLat(40.1754);
      setZoom(15);
    } else if (windowWidth <= 1300) {
      setLng(44.5200);
      setLat(40.1794);
      setZoom(15);
    } else {
      setLng(44.5250);
      setLat(40.1794);
      setZoom(15);
    }
  }, [windowWidth]);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom,
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    new mapboxgl.Marker()
      .setLngLat([44.5272, 40.1794])
      .addTo(map);

    // Clean up on unmount
    return () => map.remove();
  }, [lat, lng, zoom]);

  return (
    <MapContainer>
      <div className="map-container" ref={mapContainerRef} />
    </MapContainer>
  );
};

export default Map;
