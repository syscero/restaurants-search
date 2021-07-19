import React from 'react'
import { Wrapper, Container, Search, Logo, CarouselTitle, Carousel } from './styles'
import logo from '../../assets/logo.svg'
import { useState } from 'react'
import TextField, { HelperText, Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
//import Carousel from "react-slick";
import restaurante from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Modal, Map } from '../../components'

const Home = () => {
    const [valor, setValor] = useState('')  
    const [query, setQuery] = useState(null)  
    const [modalVisible, setVisible]  = useState(false)

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setQuery(valor)
        }
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
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title="Um Título" />
                        <Card photo={restaurante} title="Um Título" />
                        <Card photo={restaurante} title="Um Título" />
                        <Card photo={restaurante} title="Um Título" />
                        <Card photo={restaurante} title="Um Título" />
                        <Card photo={restaurante} title="Um Título" />
                        <Card photo={restaurante} title="Um Título" />
                        <Card photo={restaurante} title="Um Título" />
                        <Card photo={restaurante} title="Um Título" />
                        <Card photo={restaurante} title="Um Título" />
                        <Card photo={restaurante} title="Um Título" />
                       
                    </Carousel>
                    <button onClick={ () => setVisible(true)}>Abrir Modal</button>
                </Search>

                <RestaurantCard />
            </Container>
            <Map query={query} />
            <Modal visible={modalVisible} 
                    onClose={ () => setVisible(!modalVisible) } />
        </Wrapper>
    )
}

export default Home