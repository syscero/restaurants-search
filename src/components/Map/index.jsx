import React, { useState, useEffect } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

const MapContainer = ({ google, query }) => {
    const [map, setMap] = useState(null)

    useEffect(() => {
        if (query) {
            searchByQuery(query)
        }
    }, [query])

    function searchNearby(map, center) {
        const service = new google.maps.places.PlacesService(map)
        const request = {
            location: center,
            radius: '20000',
            type: ['restaurant']
        }

        service.nearbySearch(request, (result, status) => {
            
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log('resultado >>> ', result)
            } else {
                console.log('Error calling nearbySearch: ', status)
            }
        } )
    }

    function searchByQuery(query) {
        const service = new google.maps.places.PlacesService(map)
        const request = {
            location: map.center,
            radius: '200',
            type: ['restaurant'],
            query
        }

        service.textSearch(request, (result, status) => {
            
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log('resultado searchByQuery  >>> ', result)
            } else {
                console.log('Error calling searchByQuery: ', status)
            }
        } )
    }    

    function onMapReady(_, map) {
        setMap(map)
        searchNearby(map, map.center)
    }

    return (
        <Map google={google}
            zoom={14}
            centerAroundCurrentLocation
            onReady={() => console.log('Executou onReady!')}
            onRecenter={onMapReady}
        >

        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'pt-BR'
})(MapContainer)