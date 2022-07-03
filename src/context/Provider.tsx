import React, { useState, useEffect } from 'react';
import { fetchAPI } from '../utils/fetchAPI';
import Iwine from '../Interface/Iwines';
import Context from './Context';

const Provider = ({ children }: IProvider): JSX.Element => {
  const [products, setProducts] = useState<Iwine[]>([]);
  const [wines, setWines] = useState<Iwine[]>([]);
  const [allWines, setAllWines] = useState<Iwine[]>([]);
  const [renderSearchBar, setRenderSearchBar] = useState(false);

  useEffect(() => {
    fetchAPI().then( res => {
      if (res) {
        setWines(res);
      }
    });
  }, [setWines]);


  useEffect(() => {
    const items: Iwine[] = (JSON.parse(localStorage.getItem('Cart')));
    products && setProducts(items);
  }, [setProducts]); 

  const wineContext = {
    products,
    setProducts,
    wines,
    setWines,
    allWines,
    setAllWines,
    renderSearchBar,
    setRenderSearchBar
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
