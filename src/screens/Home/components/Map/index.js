import React from 'react';
import { GoogleMap, LoadScript, Marker, Polygon, InfoWindow } from '@react-google-maps/api';

export const Map = () => {
  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const defaultProps = {
    center: {
      lat: 20.636825,
      lng: -100.398172
    },
    zoom: 11.7
  };

  const antea = {
    lat: 20.6751633,
    lng: -100.4343919
  }

  const victoria = {
    lat: 20.586179,
    lng: -100.381645
  }

  const citadina = {
    lat: 20.536390,
    lng: -100.434204
  }

  const options = {
    fillColor: "#5271ff55",
    fillOpacity: 1,
    strokeColor: "#5271ff",
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1
  }

  const paths = [
    { lat: 20.747635, lng: -100.487360 },
    { lat: 20.753700, lng: -100.435878 },
    { lat: 20.708851, lng: -100.429313 },
    { lat: 20.681034, lng: -100.428813 },
    { lat: 20.661247, lng: -100.365379 },
    { lat: 20.612196, lng: -100.316931 },
    { lat: 20.569786, lng: -100.306606 },
    { lat: 20.519360, lng: -100.435280 },
    { lat: 20.543143, lng: -100.465867 },
    { lat: 20.577860, lng: -100.439774 },
    { lat: 20.611927, lng: -100.485779 },
    { lat: 20.747635, lng: -100.487360 }
  ];

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCYLxJwAiY7h9xhHQc8kmZJDkfI7nxSiRs"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
      >
        <Marker
          icon={"https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/55/000000/external-shop-ecommerce-kiranshastry-lineal-color-kiranshastry.png"}
          position={victoria} />

        <Marker
          icon={"https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/55/000000/external-shop-ecommerce-kiranshastry-lineal-color-kiranshastry.png"}
          position={citadina} />

        <Marker
          icon={"https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/55/000000/external-shop-ecommerce-kiranshastry-lineal-color-kiranshastry.png"}
          position={antea}
        />

        <InfoWindow
          position={antea}
        >
            <h6>Plaza Antea</h6>
        </InfoWindow>

        <Polygon
          paths={paths}
          options={options}
        />
      </GoogleMap>
    </LoadScript>
  )
}


