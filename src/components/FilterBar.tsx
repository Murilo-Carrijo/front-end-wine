import { useContext } from 'react';
import Context from '../context/Context';
import { FilterBars } from '../style/components/FilterBar';
import Iwine from '../Interface/Iwines';

export const FilterBar = () => {
  const { wines, setWines } = useContext(Context);

   const filter = async (min: number, max: number) => {     
    const filterCard = wines.filter((wine: Iwine) => (
      wine.priceMember > min && wine.priceMember <= max
    ));
    filterCard.length !== 0 && setWines(filterCard);
  }

  return (
    <FilterBars>
      <h3>Refine sua busca</h3>
      <h4>Por preço</h4>
      <label htmlFor="40">
        <input type="radio" name="filter" id="1" onChange={() => filter(0, 40)}/>
        Até R$40
      </label>
      <label htmlFor="40-60">
        <input type="radio" name="filter" id="2" onChange={() => filter(40, 60)}/>
        Até R$40 A R$60
      </label>
      <label htmlFor="100-200">
      <input type="radio" name="filter" id="3" onChange={() => filter(100, 200)}/>
        Até R$100 A R$200
      </label>
      <label htmlFor="200-500">
        <input type="radio" name="filter" id="4" onChange={() => filter(200, 500)}/>
        Até R$200 A R$500
      </label>
      <label htmlFor="500">
        <input type="radio" name="filter" id="5" onChange={() => filter(500, 99999999)}/>
        Acima de $500
      </label>      
    </FilterBars>
  );
};