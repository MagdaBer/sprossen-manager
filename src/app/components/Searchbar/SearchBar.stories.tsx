import React from 'react';
import SearchBar from './Searchbar';

export default {
  title: 'Component/Searchbar',
  component: SearchBar,
};

export const Search = (): JSX.Element => (
  <SearchBar
    handleSubmit={() => console.log('Submitted')}
    searchValue=""
    setSearchValue={(searchValue) => console.log(searchValue)}
  />
);

export const SearchWithString = (): JSX.Element => (
  <SearchBar
    handleSubmit={() => console.log('Submitted')}
    searchValue="Buchweizen"
    setSearchValue={(searchValue) => console.log(searchValue)}
  />
);
