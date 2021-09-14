import React from 'react';
import style from './SearchBar.module.css';

type SearchBarProps = {
  handleSubmit: (event: React.FormEvent) => void;
  className?: string;
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
};

function SearchBar({
  searchValue,
  handleSubmit,
  setSearchValue,
  className,
}: SearchBarProps): JSX.Element {
  return (
    <form className={`${style.form} ${className}`} onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Suche..."
        className={style.searchBar_input}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </form>
  );
}
export default SearchBar;
