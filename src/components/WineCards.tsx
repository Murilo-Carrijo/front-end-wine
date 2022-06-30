import { fetchAPI } from '../utils/fetchAPI';
import { useState, useEffect } from 'react';

import { WineCard } from '../style/components/WineCards';
import { ContainerWines } from '../style/components/ContainerWines';

export const WineCards = () => { 
  const [wines, setWines] = useState([]);
  
  useEffect(() => {
    const data = fetchAPI().then( res => {
      setWines(res.items);
    });
  }, []);
  console.log(wines);
  
  return (
    <ContainerWines>
      { wines.map((wine) => (
        <div>
          <WineCard key={wine.id}>
            <img src={ wine.image } alt={ wine.name } />
            <h4>{ wine.name }</h4>
            <h5>Sócio Wine R$ { wine.priceMember } </h5>
            <p>Não Sócio R$ { wine.priceNonMember } </p>
          </WineCard>
          <button>Adicionar</button>
        </div>
      ))}
    </ContainerWines> 
  );
}

