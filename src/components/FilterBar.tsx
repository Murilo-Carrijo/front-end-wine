
import { FilterBars } from '../style/components/FilterBar';

export const FilterBar = () => {
  return (
    <FilterBars>
      <h3>Refine sua busca</h3>
      <h4>Por preço</h4>
      <label htmlFor="40">
        <input type="radio" name="filter" id="1" />
        Até R$40
      </label>
      <label htmlFor="40-60">
        <input type="radio" name="filter" id="2" />
        Até R$40 A R$60
      </label>
      <label htmlFor="40-60">
      <input type="radio" name="filter" id="3" />
        Até R$100 A R$200
      </label>
      <label htmlFor="40-60">
        <input type="radio" name="filter" id="4" />
        Até R$200 A R$500
      </label>
      <label htmlFor="40-60">
        <input type="radio" name="filter" id="5" />
        Acima de $500
      </label>      
    </FilterBars>
  );
};