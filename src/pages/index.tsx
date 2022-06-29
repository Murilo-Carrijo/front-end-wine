import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';

import { Container } from '../style/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Wine Home Page</title>
      </Head>

       <h1>Hello World</h1>

    </Container>
  )
}

export default Home;

