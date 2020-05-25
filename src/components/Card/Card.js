import React from 'react'
import './Card.css'

const Card = props => {
  const {frontImg, back_card, flipped, onClick} = props
  const img = flipped ? frontImg : back_card
  return (
    <div className="Card" onClick={onClick}>
      <img src={img} alt=""/>
    </div>
  )
}

export default Card