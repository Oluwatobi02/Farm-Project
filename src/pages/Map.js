import { GoogleMap, InfoWindow, Marker, OverlayView } from '@react-google-maps/api';
import { FaTree } from 'react-icons/fa';
import React, { useState } from 'react'
import Nav from '../components/Nav';
const Map = (props) => {
    const { isLoaded } = props
    
const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const farm = {
    lat: 6.6536607,
    lng: 3.9586042
  };
  

  const [showInfoWindow, setShowInfoWindow] = React.useState(false);
  const [mapLoaded, setMapLoaded] = useState(false)


  return isLoaded && (
    <>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={farm}
      zoom={17}
      mapId='51df65068f3c3379'
      
      onTilesLoaded={()=> setMapLoaded(true)}
    >
        {mapLoaded && (<>
            <OverlayView position={farm}
            
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                <FaTree size={32} color="green" 
                onClick={() => setShowInfoWindow(true)}/>
            </OverlayView>
            <Marker position={{
                lat: 6.9,
                lng: 4
              }}
              onClick={()=> setShowInfoWindow(true)}
            />
            </>
        )}
      {showInfoWindow && (<>
          <InfoWindow
            position={farm}
            onCloseClick={() => setShowInfoWindow(false)}
            options={{ pixelOffset: new window.google.maps.Size(0, -30) }} // Adjusts the InfoWindow's position upwards by 30 pixels
          >
            <div>
              <h3>My Farm</h3>
              <p>My Farm is located at 6, Ogunyemi Street, Ikorodu, Lagos State</p>
            </div>
          </InfoWindow>
          <InfoWindow
            position={{
                lat: 6.9,
                lng: 4
              }}
            onCloseClick={() => setShowInfoWindow(false)}
            options={{ pixelOffset: new window.google.maps.Size(0, -30) }} // Adjusts the InfoWindow's position upwards by 30 pixels
          >
            <div>
              <h3>My Farm 1</h3>
              <p>My Farm is located at 7, Ogunyemi Street, Ikorodu, Lagos State</p>
            </div>
          </InfoWindow>
          </>
          
        )}
   
    </GoogleMap>

    
    </>
) 
}

export default Map;