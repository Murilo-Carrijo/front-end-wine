import Link from 'next/link';
import { useContext } from 'react';
import { Headers, HeadersButton } from '../style/components/Header';
import Context from '../context/Context';

export const Header = () => {
  const { products, renderSearchBar, setRenderSearchBar } = useContext(Context);

  return (
    <Headers>
      <img alt="Wine" src="https://img.wine.com.br/logo/wine/black/wine.svg"/>
      <p>Clube</p>
      <p>Loja</p>
      <p>Produtos</p>
      <p>Ofertas</p>
      <p>Eventos</p>
      <HeadersButton>
        <button
          onClick={ () => setRenderSearchBar(!renderSearchBar) }
          type="button"
        >
          <img alt="serch" src="/search.png" />
        </button>
        <button>
          <img alt="user" src="/user.png" />
        </button>
        <Link href="/ShoppingCart">
          <a>
            <img alt="shopping-cart" src="/shopping-cart.png" />
            { products && <span>{ products.length }</span> }
          </a>
        </Link>
      </HeadersButton>
    </Headers>
  );
};