import React from 'react'
import { Wrapper, Container, Search, Logo, CarouselTitle, Carousel, ModalTitle, ModalContent } from './styles'
import logo from '../../assets/logo.svg'
import { useState } from 'react'
import TextField, { HelperText, Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
//import Carousel from "react-slick";
import restaurante from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components'

import { useSelector } from 'react-redux'

const Home = () => {
    const [valor, setValor] = useState('')  
    const [query, setQuery] = useState(null) 
    const [placeId, setPlaceId]  = useState(null)
    const [modalVisible, setVisible]  = useState(false)
    
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants)

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setQuery(valor)
        }
    }

    function handleOpenModal(placeId) {
        setPlaceId(placeId)
        setVisible(true)
    }
    
    return (
        <Wrapper>
            <Container>
                <Search >
                    <Logo src={logo} alt="Logo Restaurante" />
                    <TextField
                        label='Pesquisar Restaurantes'
                        helperText={<HelperText>Nunca exponha suas senhas...</HelperText>}
                        outlined
                        //onTrailingIconSelect={() => this.setState({ value: '' })}
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    >                     
                        <Input
                            value={valor}
                            onKeyPress={handleKeyPress}
                            onChange={(e) => setValor(e.currentTarget.value)} />
                    </TextField>

                    {
                        restaurants.length > 0 ? (
                    <>
                        <CarouselTitle>Na sua Área</CarouselTitle>
                        <Carousel {...settings}>
                            { restaurants.map((restaurant) => (
                                <Card 
                                    title={restaurant.name}
                                    key={restaurant.place_id}
                                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} />
                            ))}                                                                  
                        </Carousel>
                    </>) : (
                        <Loader />
                    )

                    }
                  
                </Search>

                { restaurants.map((restaurant) => (
                    <RestaurantCard
                        onClick={() => handleOpenModal(restaurant.place_id)} 
                        key={restaurant.place_id}
                        restaurant={restaurant} />
                ))}

                
            </Container>
            <Map query={query} placeId={placeId} />
            <Modal visible={modalVisible} 
                    onClose={ () => setVisible(!modalVisible) } >

                <ConteudoOuSkeleton restaurantSelected={restaurantSelected} />
                
            </Modal>
        </Wrapper>
    )
}

const ConteudoOuSkeleton = ( { restaurantSelected } ) => {
    return restaurantSelected ?
        <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent>{restaurantSelected?.opening_hours?.open_now ? 'Aberto' : 'Fechado'}</ModalContent>
        </>
        : 
        <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
        </>
}

export default Home