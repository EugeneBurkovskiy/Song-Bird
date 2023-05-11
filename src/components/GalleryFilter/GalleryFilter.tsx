import React from 'react';

import SearchInput from '../SearchInput/SearchInput';
import { searchParamsAction } from '../../pages/GalleryPage/GalleryPage';

import classes from './GalleryFilter.module.scss';

interface IProps {
  setSearchParams: React.Dispatch<searchParamsAction>;
}

const GalletyFilter: React.FC<IProps> = ({ setSearchParams }) => {
  return (
    <form className={classes.form}>
      <SearchInput onChange={(e) => setSearchParams({ type: 'search', payload: e.target.value })} />
      <select
        name="category"
        onChange={(e) => setSearchParams({ type: 'select', payload: e.target.value })}
        className={classes.form__category}
      >
        <option value="name">By name</option>
        <option value="species">By species</option>
        <option value="category">By category</option>
        <option value="description">By description</option>
      </select>
    </form>
  );
};

export default GalletyFilter;
