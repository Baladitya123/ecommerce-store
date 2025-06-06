import React from 'react';
import { Link } from 'react-router-dom';
import Carousal from '../components/Carousal';
import Products from './Products';
import Rewards from '../components/Rewards';
import Faqs from '../components/Faqs';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className='container-fluid d-flex justify-content-center flex-column'>  
  
      <Carousal/>
      <Products/>
      <Rewards/>
      <Faqs/>
    </div>
  );
}

export default Home;
