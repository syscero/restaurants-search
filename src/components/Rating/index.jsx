import React from 'react'
import ReactStars from "react-rating-stars-component";

const Rating = ({ onChange, value }) => (
    <ReactStars
        count={5}
        isHalf
        value={value}
        onChange={onChange}
        size={24}
        edit={false}
        activeColor="#e7711c" />
)

export default Rating