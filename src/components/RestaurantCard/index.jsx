import React from 'react'
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles'
import Rating from '../Rating'
import restaurante from '../../assets/restaurante-fake.png'


const RestaurantCard = ({ restaurant }) => (
    <Restaurant >
        <RestaurantInfo>
            <Title>{restaurant.name}</Title>
            <Rating value={restaurant.rating}>Avaliação</Rating>
            <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
        </RestaurantInfo>
        <RestaurantPhoto 
                src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
                alt={restaurant.name} />
    </Restaurant>
)

export default RestaurantCard

// ULTIMO VIDEO ASSISTIDO: Desenvolvimento de componentes Parte 4