import styled from 'styled-components'
import Slider from "react-slick"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const Container = styled.aside`
   background-color: ${ (props) => props.theme.colors.background };
   width: 360px;
   height: 100vh;
   overflow-y: auto
` 

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: center;
    padding: 16px;

`

export const Logo = styled.img`
    margin-bottom: 15px;
`

export const Map = styled.div`
    background-color: red;
    width: 100%;
`

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 20px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;
`

export const Carousel = styled(Slider)`
    .slick-slide {
        margin-right: 28px
    }
`