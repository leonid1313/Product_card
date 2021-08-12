import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';

export const CardList = ({
  cards = [],
}) => (
  <div className="cards">
    {cards.map(card => (
      <ProductCard key={card.price} {...card}/>
    ))}
  </div>
);
