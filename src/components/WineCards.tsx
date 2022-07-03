import { useContext ,useEffect } from 'react';
import Iwine from "../Interface/Iwines";
import Context from '../context/Context';
import { SearchBar } from './SearchBar';

import { WineCard } from '../style/components/WineCards';
import { ContainerWines } from '../style/components/ContainerWines';

export const WineCards = () => { 
  const { wines, setProducts, renderSearchBar } = useContext(Context);

  const MAX_LENGTH: number = 9;
  const MIN_LENGTH: number = 0;

  const cartItems = (wine) => {
    setProducts((items: Iwine[]) => items && [...items, wine]);    
  }

  const setLocalStorage = (wine: Iwine) => {
    const items = JSON.parse(localStorage.getItem('Cart'));
    if (!items || items === [])
    localStorage.setItem('Cart', JSON.stringify([wine]));
    if (items) {
      items.push(wine)
      localStorage.setItem('Cart', JSON.stringify(items));
    }
  }

  return (
    <ContainerWines>
      { renderSearchBar && <SearchBar />}
      { wines.map((wine: Iwine, index) => (
        index < MAX_LENGTH && index > MIN_LENGTH &&
        <div key={wine.id}>
          <WineCard>
            <img src={ wine.image } alt={ wine.name } />
            <h4>{ wine.name }</h4>
            <h4>Sócio Wine <h3>R$ { wine.priceMember.toFixed(2) }</h3> </h4>
            <p>Não Sócio R$ { wine.priceNonMember.toFixed(2) } </p>
          </WineCard>
          <button
            onClick={ () => {
              cartItems(wine);
              setLocalStorage(wine);
            } }
          >
            Adicionar
          </button>
        </div>
      ))}
    </ContainerWines> 
  );
}

