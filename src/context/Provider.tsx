import React, { useState, useEffect } from 'react';
import { fetchAllAPI, fetchAPI } from '../utils/fetchAPI';
import Iwine from '../Interface/Iwines';
import Context from './Context';

const Provider = ({ children }: IProvider): JSX.Element => {
  const [products, setProducts] = useState<Iwine[]>([]);
  const [wines, setWines] = useState<Iwine[]>([]);
  const [allWines, setAllWines] = useState<Iwine[]>([]);

  useEffect(() => {
    fetchAPI().then( res => {
      if (res) {
        setWines(res);
      }
    });
  }, [setWines]);

  const wineContext = {
    products,
    setProducts,
    wines,
    setWines,
    allWines,
    setAllWines,
  };

  return (
    <main>
      <Context.Provider value={wineContext}>
        { children }
      </Context.Provider>
    </main>
  );
}

export default Provider;