import React from 'react';
import { useViewport } from '../store/viewportContext';
import { cards } from '../mock';
import './CardItem.scss';

const CardItem = () => {
  const {width} = useViewport();
  const breakpoint = 769;

  return (
    cards.map(card =>
      <div className={ `card-item card-item--${ card.id }` } key={ card.id }>
        <div className='card-item__img-container'>
          <img className='card-item__img' src={ card.img } alt={ card.altText }/>
        </div>

        <div className='card-item__wrap'>
          <h2 className='card-item__title'>
            <a href='#void' className='card-item__link'>{ card.title }</a>
          </h2>
          <small className='card-item__id'>SKU: { card.id } </small>
          <span className='card-item__old-price'>{ width < breakpoint ? `${ Math.floor(card.oldPrice) } $` : `${ card.oldPrice } $` }</span>
          <span className='card-item__current-price'>{ width < breakpoint ? `${ Math.round(card.currentPrice) } $` : `${ card.currentPrice } $` }</span>
        </div>
      </div>
    )
  )
}

export default CardItem;
