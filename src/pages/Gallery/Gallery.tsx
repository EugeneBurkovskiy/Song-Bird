import React, { useReducer } from 'react';

import { IBird } from '../../context/BirdsContext';
import Loading from '../../components/Loading/Loading';
import GalleryList from './GalleryCardsList/GalleryCardsList';
import PageContainer from '../../components/PageContainer/PageContainer';
import GalleryFilter from './GalleryFilter/GalleryFilter';
import useFetching from '../../hooks/useFetching';
import NotFound from '../../components/NotFound/NotFound';

export interface ISearchParams {
  searchValue: string;
  select: string;
}
export type searchParamsAction =
  | { type: 'search'; payload: string }
  | { type: 'select'; payload: string };

const initialSearchParams: ISearchParams = {
  searchValue: '',
  select: 'name',
};

function reducer(state: ISearchParams, action: searchParamsAction) {
  switch (action.type) {
    case 'search':
      return { ...state, searchValue: action.payload };
    case 'select':
      return { ...state, select: action.payload };
    default:
      throw new Error();
  }
}

const Gallery = () => {
  const [data, loading, error] = useFetching();
  const [searchParams, dispatch] = useReducer(reducer, initialSearchParams);

  return (
    (data && (
      <PageContainer title="Gallery">
        <GalleryFilter setSearchParams={dispatch} />
        <GalleryList birds={data as IBird[]} searchParams={searchParams} />
      </PageContainer>
    )) ||
    (loading && <Loading />) || <NotFound />
  );
};

export default Gallery;
