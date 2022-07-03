import React, { useContext } from 'react';
import Context from '../context/Context';

import { Search } from '../style/components/SearchBar';

export const SearchBar = () => {
  const {
    selectFilter,
    setSelectFilter,
    setFilterInfor
  } = useContext(Context);

  const handleClick = () => {
    setFilterInfor(selectFilter);
  }

  return (
    <Search>
      <input
        type="text"
        placeholder="Insira o nome do vinho"
        onChange={ (e) =>setSelectFilter({ ...selectFilter, text: e.target.value }) }
      >
      </input>
    </Search>
  );
}