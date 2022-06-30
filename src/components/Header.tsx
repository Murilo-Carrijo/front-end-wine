import { Headers } from '../style/components/Header';
import Image from 'next/image';
import { LupaWithe } from './LupaWithe';
import { UserWithe } from './UserWithe';
import { Wine } from './Wine';

export const Header = () => {
  return (
    <Headers>
      <img alt="Wine" src="	https://img.wine.com.br/logo/wine/black/wine.svg" />
      <p>Clube</p>
      <p>Loja</p>
      <p>Produtos</p>
      <p>Ofertas</p>
      <p>Eventos</p>
      <button>
       <LupaWithe />
      </button>
      <button>
        <UserWithe />
      </button>
      <button>
        {/* <Image src="/wine.png" alt='Pesquisa' height={56} width={56} /> */}
        <Wine />
      </button>
    </Headers>
  );
};