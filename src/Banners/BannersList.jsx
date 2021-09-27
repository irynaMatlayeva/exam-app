import React from 'react';
import Banners from './Banners';
import logo from '../assets/images/FTL-logo-Grey.svg';
import { useViewport } from '../store/viewportContext';

const BannersList = () => {
  const {width} = useViewport();
  const breakpoint = 769;

  return (
    width < breakpoint ?
      <>
        <Banners classes='logo' children={ <img className='card-banners__img' src={ logo } alt='Logo FTL'/> }/>
        <Banners classes='title' children={ <h2>Kickstart</h2> }/>
      </> :
      <>
        <Banners classes='title' children={ <h2>Kickstart</h2> }/>
        <Banners classes='logo' children={ <img className='card-banners__img' src={ logo } alt='Logo FTL'/> }/>
      </>
  );
};

export default BannersList;
