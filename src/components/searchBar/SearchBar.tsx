import React, { FormEvent } from 'react';
import toast from 'react-hot-toast';
import { IoSearch } from 'react-icons/io5';
import css from './SearchBar.module.css';
import { SearchBarProps } from './SearchBar.types';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const notify = () => toast('Search field cannot be empty');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const searchTerm = (form.elements.namedItem('query') as HTMLInputElement)
      .value;
    if (searchTerm.trim() === '') {
      notify();
      return;
    }
    onSearch(searchTerm);
  };

  return (
    <header className={css.header}>
      <form className={css.searchContainer} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button className={css.searchBtn} type="submit">
          <IoSearch size={20} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
