import {Outlet, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState, useRef} from "react";
import {APIContext} from "../../Contexts/APIContext";
import { Box, Flex } from '@chakra-ui/react'
import {useJsApiLoader,GoogleMap,MarkerF} from '@react-google-maps/api'
  
const center = { lat: 43.659020, lng: -79.391190 }
  
const Map = () => {

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
      position='absolute'
      // flexDirection='column'
      alignItems='center'
      h='100vh'
      w='100vw'
    >
      <Box position='absolute' left='30%' top='30%' h='80%' w='80%'>
        {/* Google Map Box */}
        
        <GoogleMap
          center={center} // Map centered at MScAC location
          zoom={15}
          mapContainerStyle={{ width: '50%', height: '80%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <MarkerF position={center} onLoad={onLoad}/>

        </GoogleMap>
      </Box>
    </Flex>
  )
}

export default Map