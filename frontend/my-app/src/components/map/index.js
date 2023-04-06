import {Outlet, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState, useRef} from "react";
import {APIContext} from "../../Contexts/APIContext";
import { Box, Flex, IconButton } from '@chakra-ui/react'
import {useJsApiLoader,GoogleMap,MarkerF} from '@react-google-maps/api'
  
const center = { lat: 43.659020, lng: -79.391190 }
  
const Map = () => {

  const [map, setMap] = useState();

  const onLoad = marker => {
    console.log('marker is this: ', marker)
  }

  // Whether the map is loaded
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAFTHgiX4sQ-lVl0l6GB0gTtbjjj9fGoDo",
    libraries: ['places'],
  })

  if (!isLoaded) {
    return <h1 left= "10%" >Loading...</h1>
  }

  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='50vh'
      w='100vw'
    >
      <Box 
      position='relative' 
      // left='30%' top='20%' 
      h='100%' w='80%'
      >
        {/* Google Map Box */}
        
        <GoogleMap
          center={center} // Map centered at MScAC location
          zoom={15}
          mapContainerStyle={{ width: '50%', height: '80%'}}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => {
            setMap(map);
          }}
        >
          <MarkerF position={center} onClick={() => map.setCenter(center)}/>
        </GoogleMap>
        <button onClick={() => map.setCenter(center)}> Re-center</button>
      </Box>
    </Flex>
  )
}

export default Map