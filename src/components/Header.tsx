import Link from 'next/link';
import { useContext } from 'react';
import { Headers } from '../style/components/Header';
import { LupaWithe } from './LupaWithe';
import { UserWithe } from './UserWithe';
import { Wine } from './Wine';
import Context from '../context/Context';

export const Header = () => {
  const { products, renderSearchBar, setRenderSearchBar } = useContext(Context);

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
        <Link href="/ShoppingCart">
          <a>
            <Wine />
            { products && <span>{ products.length }</span> }
          </a>
        </Link>
      </div>
    </Headers>
  );
};