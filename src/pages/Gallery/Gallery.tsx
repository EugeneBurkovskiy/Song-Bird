import React, { useContext, useReducer } from 'react';
import { BirdsContext } from '../../context/BirdsContext';
import Loading from '../../components/Loading/Loading';
import GalleryList from './GalleryCardsList/GalleryCardsList';
import classes from './Gallery.module.scss';
import PageContainer from '../../components/PageContainer/PageContainer';
import GalleryFilter from './GalleryFilter/GalleryFilter';

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

export default function Gallery() {
  const { data } = useContext(BirdsContext);
  const [searchParams, dispatch] = useReducer(reducer, initialSearchParams);

  return data ? (
    <PageContainer title="Gallery">
      <GalleryFilter setSearchParams={dispatch} />
      <GalleryList birds={data} searchParams={searchParams} />
    </PageContainer>
  ) : (
    <Loading />
  );
}
