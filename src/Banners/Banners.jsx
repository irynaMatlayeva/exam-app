import React from 'react';
import './Banners.scss'

const Banners = ({children, classes}) => {
  return (
    <div className={ `card-banners card-banners__${ classes }` }>{ children }</div>
  );
};

export default Banners;
