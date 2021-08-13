import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './CardList.css'

const CardList = ({
  cards = [],
}) => (
  <div className="cards">
    {cards.map(card => (
      <ProductCard key={card.price} {...card}/>
    ))}
  </div>
);

export default CardList;