import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';

import { Header } from '../components/Header';
import { FilterBar } from '../components/FilterBar';
import { WineCards } from '../components/WineCards';

import { Container } from '../style/pages/Home';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Wine Home Page</title>
      </Head>
      <Header />
      <Container>
        <FilterBar />
        <WineCards />
      </Container>
    </div>
  )
}

export default Home;

