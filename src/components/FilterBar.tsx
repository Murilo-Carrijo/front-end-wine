
import { FilterBars } from "../style/components/FilterBar";

export const FilterBar = () => {
  return (
    <FilterBars>
      <h3>Refine sua busca</h3>
      <h4>Por preço</h4>
      <label htmlFor="40">
        <input type="radio" name="40" id="40" />
        Até R$40
      </label>
      <label htmlFor="40-60">
        <input type="radio" name="40-60" id="40-60" />
        Até R$40 A R$60
      </label>
      <label htmlFor="40-60">
      <input type="radio" name="100-200" id="100-200" />
        Até R$100 A R$200
      </label>
      <label htmlFor="40-60">
        <input type="radio" name="200-500" id="200-500" />
        Até R$200 A R$500
      </label>
      <label htmlFor="40-60">
        <input type="radio" name="500" id="500" />
        Acima de $500
      </label>      
    </FilterBars>
  );
};