import React from 'react';
import Layout from '../src/components/Layout/index';
import Hero from '../../pages/about/Hero';
import Card from './Card';

const index = () => {
  return (
   <Layout>
    <Hero/>
    <Card />
   </Layout>
  )
}

export default index