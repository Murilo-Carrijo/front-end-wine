import React, { useState, useEffect } from 'react';
import { fetchAllAPI, fetchAPI } from '../utils/fetchAPI';
import Iwine from '../Interface/Iwines';
import Context from './Context';

const Provider = ({ children }: IProvider): JSX.Element => {
  const [products, setProducts] = useState<Iwine[]>([]);
  const [wines, setWines] = useState<Iwine[]>([]);
  const [allWines, setAllWines] = useState<Iwine[]>([]);
  const [selectFilter, setSelectFilter] = useState([{ radio: '', text: '' }]);
  const [filterInfo, setFilterInfor] = useState({});
  const [renderSearchBar, setRenderSearchBar] = useState(false);

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
    selectFilter,
    setSelectFilter,
    filterInfo,
    setFilterInfor,
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
