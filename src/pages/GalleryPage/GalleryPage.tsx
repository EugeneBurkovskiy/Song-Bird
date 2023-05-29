import React, { useReducer } from 'react';

import Loading from '../../components/Loading/Loading';
import GalleryList from './components/GalleryCardsList/GalleryCardsList';
import PageContainer from '../../components/PageContainer/PageContainer';
import GalleryFilter from './components/GalleryFilter/GalleryFilter';
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

const GalleryPage = () => {
  const { data, loading } = useFetching();
  const [searchParams, dispatch] = useReducer(reducer, initialSearchParams);

  return (
    (data && (
      <PageContainer title="Gallery">
        <GalleryFilter setSearchParams={dispatch} />
        <GalleryList birds={data} searchParams={searchParams} />
      </PageContainer>
    )) ||
    (loading && <Loading />) || <NotFound />
  );
};

export default GalleryPage;
