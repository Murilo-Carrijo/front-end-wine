import { useEffect, useState } from 'react';
import { Headers } from '../style/components/Header';
import { LupaWithe } from './LupaWithe';
import { UserWithe } from './UserWithe';
import { Wine } from './Wine';

export const Header = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('Cart')))
  });
  
  return (
    <Headers>
      <img alt="Wine" src="	https://img.wine.com.br/logo/wine/black/wine.svg" />
      <p>Clube</p>
      <p>Loja</p>
      <p>Produtos</p>
      <p>Ofertas</p>
      <p>Eventos</p>
      <div>
        <button>
        <LupaWithe />
        </button>
        <button>
          <UserWithe />
        </button>
        <button>
          <Wine />
          <span>{ products ? products.length : 0 }</span>
        </button>
      </div>
    </Headers>
  );
};