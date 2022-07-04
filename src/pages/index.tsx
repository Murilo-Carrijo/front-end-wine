import React from 'react';
import Head from 'next/head';
import Provider from '../context/Provider';
import Store from './Store'

const Home: React.FC = () => {
  return (
    <Provider>
      <Head>
        <title>Wine Home Page</title>
      </Head>
      <Store />
    </Provider>
  )
}

export default Home;

