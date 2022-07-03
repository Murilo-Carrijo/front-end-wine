import React, { useState, useEffect } from 'react';
import Iwine from '../Interface/Iwines';

import { ContainerShoppingCart } from '../style/pages/ContainerShoppingCart';
import { WineCard } from '../style/components/WineCards';

const ShoppingCart = () => {
  const [ products, setProducts ] = useState<Iwine[]>([]);
  const initialValue = 0;

  useEffect(() => {
    const items: Iwine[] = (JSON.parse(localStorage.getItem('Cart')));
    setProducts(items);
  }, []);

  return (
    <>
    <ContainerShoppingCart>
      <h2>
      Total para membros R$ {''} 
      { products.map((product) => (
          product.priceMember
        )).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
      }
      </h2>
      <h2>
      Total para não membros R$ {''}  
      { products.map((product) => (
          product.priceNonMember
        )).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
      }
      </h2>
    </ContainerShoppingCart>
      <ContainerShoppingCart>
        { products.map((product) => (
          <WineCard>
            <img src={ product.image } alt={ product.name } />
            <h4>{ product.name }</h4>
            <h5>Sócio product R$ { product.priceMember.toFixed(2) } </h5>
            <p>Não Sócio R$ { product.priceNonMember.toFixed(2) } </p>
          </WineCard>     
          ))} 
      </ContainerShoppingCart>
    </>
  )
}

export default ShoppingCart;