import React from 'react';
import { Header } from '../components/Header';
import { FilterBar } from '../components/FilterBar';
import { WineCards } from '../components/WineCards';

import { Container } from '../style/pages/Home';

const Store: React.FC = () => {
  return (
    <>
    <Header />
       <Container>
         <FilterBar />
         <WineCards />
       </Container>
   </>
  );
}

export default Store;