import Link from 'next/link';
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
  }, [setProducts]);

  const setLocalStorage = (wine: Iwine) => {
    const items = JSON.parse(localStorage.getItem('Cart'));
    if (!items || items === [])
    localStorage.setItem('Cart', JSON.stringify([wine]));
    if (items) {
      items.push(wine)
      localStorage.setItem('Cart', JSON.stringify(items));
      setProducts(items);
    }
  }

  const removeLocalStorage = (wine: Iwine) => {
    const items = JSON.parse(localStorage.getItem('Cart'));
    const newItems = items.filter((item) => item.id !== wine.id);
    localStorage.setItem('Cart', JSON.stringify(newItems));
    setProducts(newItems);
    
  }

  return (
    <>
      { !products || products.length === 0 ? 
        <ContainerShoppingCart>
          <h1>
            Você ainda não escolheu seus produtos.
            <p>{''}</p>
            <Link href="/">Voltar para a loja</Link>
          </h1>
        </ContainerShoppingCart> :
          <div>
            <ContainerShoppingCart>
            <h2>
            Total para membros R$ {''} 
            { products.map((product) => (
                product.priceMember
              )).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue).toFixed(2)
            }
            </h2>
            <h2>
            Total para não membros R$ {''}  
            { products.map((product) => (
                product.priceNonMember
              )).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue).toFixed(2)
            }
            </h2>
            </ContainerShoppingCart>
            <ContainerShoppingCart>
            { products.map((product, i) => (
              <div key={i}>
                <WineCard>
                  <img src={ product.image } alt={ product.name } />
                  <h4>{ product.name }</h4>
                  <h4>Sócio Wine <h3>R$ { product.priceMember.toFixed(2) }</h3> </h4>
                  <p>Não Sócio R$ { product.priceNonMember.toFixed(2) } </p>
                </WineCard>
                <button
                  onClick={ () => {
                  setLocalStorage(product);
                  } }
                >
                  Adiciona
                </button>
                <button
                  onClick={ () => {
                  removeLocalStorage(product);
                  } }
                >
                  Remover
                </button>
              </div>
              ))} 
            </ContainerShoppingCart>
          </div>
        
      }
    </>
  )
}

export default ShoppingCart;