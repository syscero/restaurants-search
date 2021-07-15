import React from 'react'
import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles'
import Rating from '../Rating'
import restaurante from '../../assets/restaurante-fake.png'


const RestaurantCard = () => (
    <Restaurant >
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <Rating value={2}>Avaliação</Rating>
            <Address>Rua Mariele Franco, 100</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurante} alt="Foto Restaurante" />
    </Restaurant>
)

export default RestaurantCard

// ULTIMO VIDEO ASSISTIDO: Desenvolvimento de componentes Parte 4