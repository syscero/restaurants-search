import React, { useState } from 'react'
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles'
import Rating from '../Rating'
import restaurante from '../../assets/restaurante-fake.png'
import Skeleton from '../Skeleton'


const RestaurantCard = ({ restaurant, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <Restaurant onClick={onClick} >
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <Rating value={restaurant.rating}>Avaliação</Rating>
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto
                    imageLoaded={imageLoaded}
                    onLoad={() => setImageLoaded(true)} 
                    src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
                    alt={restaurant.name} />
            {!imageLoaded && <Skeleton width="100px" height="100px" /> }
        </Restaurant>
    )
}

export default RestaurantCard

// ULTIMO VIDEO ASSISTIDO: Desenvolvimento de componentes Parte 4