import React from 'react';

import BirdCard from '../../../../components/BirdCard/BirdCard';
import { IBird } from 'context/BirdsContext';
import NotFound from '../../../../components/NotFound/NotFound';
import { ISearchParams } from '../../GalleryPage';

import classes from './GalleryCardsList.module.scss';

interface IProps {
  birds: IBird[];
  searchParams: ISearchParams;
}

const GalleryList: React.FC<IProps> = ({ birds, searchParams }) => {
  function filterBirds(birds: IBird[], params: ISearchParams) {
    const pattern = new RegExp(`^${params.searchValue}`, 'i');
    const filteredArr = birds.filter((item) =>
      pattern.test(item[`${params.select}` as keyof IBird] as string)
    );
    if (filteredArr.length) {
      return filteredArr.map((item) => (
        <li key={item.id} className={classes.list__item}>
          <BirdCard bird={item} details={true} />
        </li>
      ));
    }
    return <NotFound text={`"${searchParams.searchValue}" not found`} />;
  }

  return <ul className={classes.list}>{filterBirds(birds, searchParams)}</ul>;
};

export default GalleryList;
