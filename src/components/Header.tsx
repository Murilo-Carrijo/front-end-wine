import { useEffect, useContext } from 'react';

import { Headers } from '../style/components/Header';
import { LupaWithe } from './LupaWithe';
import { UserWithe } from './UserWithe';
import { Wine } from './Wine';
import Context from '../context/Context';
import Iwine from '../Interface/Iwines';

export const Header = () => {
  const { products, setProducts, renderSearchBar, setRenderSearchBar } = useContext(Context);

  useEffect(() => {
    const items: Iwine[] = (JSON.parse(localStorage.getItem('Cart')));
    setProducts(items);
  }, []);  

  return (
    <Headers>
      <img alt="Wine" src="	https://img.wine.com.br/logo/wine/black/wine.svg" />
      <p>Clube</p>
      <p>Loja</p>
      <p>Produtos</p>
      <p>Ofertas</p>
      <p>Eventos</p>
      <div>
        <button
          onClick={ () => setRenderSearchBar(!renderSearchBar) }
          type="button"
        >
        <LupaWithe />
        </button>
        <button>
          <UserWithe />
        </button>
        <button>
          <Wine />
          { products && <span>{ products.length }</span> }
        </button>
      </div>
    </Headers>
  );
};