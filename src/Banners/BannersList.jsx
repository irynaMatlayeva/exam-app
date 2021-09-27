import React from 'react';
import Banners from './Banners';
import logo from '../assets/images/FTL-logo-Grey.svg';

const BannersList = () => {
  return (
    <>
      <Banners classes='logo' children={ <img className='card-banners__img' src={ logo } alt='Logo FTL'/> }/>
      <Banners classes='title' children={ <h2>Kickstart</h2> }/>
    </>
  );
};

export default BannersList;
