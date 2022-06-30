import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import { Header } from '../components/Header';
import { FilterBar } from '../components/FilterBar';

import { Container } from '../style/pages/Home'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Wine Home Page</title>
      </Head>
      <Header />
      <FilterBar />
      <Container>
        <h1>Hello World</h1>
      </Container>
    </div>
  )
}

export default Home;

