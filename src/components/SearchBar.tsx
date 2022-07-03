import React from 'react';

import { Search } from '../style/components/SearchBar';

export const SearchBar = () => {
  return (
    <Search>
      <input
        type="text"
        placeholder="Insira o nome do vinho"
      >
      </input>
    </Search>
  );
}