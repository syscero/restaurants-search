import React, { useState, useEffect } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

import { useDispatch, useSelector } from 'react-redux'
import { setRestaurants } from '../../redux/modules/restaurants'

const MapContainer = ({ google, query }) => {
    const dispatch = useDispatch()
    const { restaurants } = useSelector((state) => state.restaurants)

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
                dispatch(setRestaurants(result))
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
                dispatch(setRestaurants(result))
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
            { restaurants.map((restaurant) => (
                <Marker key={restaurant.place_id} 
                    name={restaurant.name}
                    position={{
                       lat: restaurant.geometry.location.lat(),
                       lng: restaurant.geometry.location.lng(),
                    }} />
            )) }
            
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'pt-BR'
})(MapContainer)