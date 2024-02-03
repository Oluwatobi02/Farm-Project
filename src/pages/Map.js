import { GoogleMap,  useLoadScript, InfoWindow, OverlayView } from '@react-google-maps/api';
import { FaTree } from 'react-icons/fa';
import React, { useEffect, useState } from 'react'
import ProductData from '../lib/productData';
import { useNavigate } from 'react-router-dom';
import { mapOptions } from '../components/MapConfiguration';
const Map = () => {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: mapOptions.googleMapApiKey, // Replace with your API key
  });




  const navigate = useNavigate()
  const handleGotoHomeClick = () => {
navigate('../')
  }

    
const containerStyle = {
    width: '100%',
    height: '100%'
  };
  const boundaries = {
    north: 6.660947586442602,
    south: 6.6418935705212565,
    east: 3.965877731991765,
    west: 3.945241125107386
  };

  const farm = {
    lat: 6.652166646215338,
    lng: 3.9564047886110876
    
  };

  const locations = Array.from({ length: 20 }, () => ({
    lat: Math.random() * (boundaries.north - boundaries.south) + boundaries.south,
    lng: Math.random() * (boundaries.east - boundaries.west) + boundaries.west,
  }));

  const [showInfoWindows, setShowInfoWindows] = useState(ProductData.map(() => false));
  const [mapLoaded, setMapLoaded] = useState(false)
  const [temperature, setTemperature] = useState(null);


  const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const state = 'lagos'
  async function checkWeather(city) {
    const response = await fetch(apiUrl + city+ `&appid=${apiKey}`);
     

     if (response.status === 404) {
      return null;
     } 
     else {
        const data = await response.json();
        return data.main.temp
      
}}

useEffect(() => {
  const fetchTemperature = async () => { 
    const temp = await checkWeather(state);
    setTemperature(temp);
  };
  fetchTemperature();
}, [state]); // eslint-disable-next-line

  return  isLoaded && (
    <>
    <div className='map-container'>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={farm}
      zoom={17}
      draggable={!showInfoWindows.some(isOpen => isOpen)}
      onTilesLoaded={()=> setMapLoaded(true)}
      options={{ 
        minZoom: 0,
         maxZoom: 18,
         mapId: mapOptions.mapId, 
         mapTypeId: 'satellite',
         streetViewControl: false,
         restriction: {
          latLngBounds: {
            north: boundaries.north,
            south: boundaries.south,
            east: boundaries.east,
            west: boundaries.west,
          },
          strictBounds: true,
        },
      }}
    >
        {mapLoaded && (<>

          {ProductData.map((location, i) => (
  <OverlayView
    key={i}
    position={location.coord}
    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    getPixelPositionOffset={(width, height) => ({
      x: -(width / 2),
      y: -(height / 2),
    })}
  >
    <div>
   <FaTree
      size="3em" // Change this value to adjust the size of the icon
      color="green" // Change this value to adjust the color of the icon
      onClick={(event) => {
        event.stopPropagation();
        const newShowInfoWindows = [...showInfoWindows];
        newShowInfoWindows[i] = true;
        setShowInfoWindows(newShowInfoWindows);
      }}
    />
        {showInfoWindows[i] && (
      <InfoWindow
        position={location.coord}
        onCloseClick={() => {
          const newShowInfoWindows = [...showInfoWindows];
          newShowInfoWindows[i] = false;
          setShowInfoWindows(newShowInfoWindows);
        }}
        options={{ pixelOffset: new window.google.maps.Size(0, -10) }}
      >
        <div className='map-infowindow'>
          <div className='map-infowindow-header'>
          <h3>{location.title}</h3>
          <img src={location.singleImg} alt={location.title} />
          </div>
          <div className='map-infowindow-body'>
          <p>{`Temperature: ${temperature}℃`}</p>
          <p>{`Plant Species: `}</p>
          <p>{`Watering Needs: `}</p>
          <p>{`Soil Type: `}</p>
          <p>{`Growth Habit: `}</p>
          <p>{`Light Requirements: `}</p>
          <h3>Short Description:</h3>
          <p>{location.shortDescription}</p>
          </div>
          

        </div>
      </InfoWindow>
    )}
    </div>
  </OverlayView>
))}
            
            </>
        )}
   
    </GoogleMap>
    </div>
    <div className='button-container'>
    <button 
    className='read-more-button'
    onClick={handleGotoHomeClick}

    >Go to Home</button>
    </div>
    </>

) 
}

export default Map;