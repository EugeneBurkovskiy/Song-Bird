import React, { useContext } from 'react';
import { BirdsContext } from '../../context/BirdsContext';
import Loading from '../../components/Loading/Loading';
import GalleryList from './GalleryCardsList/GalleryCardsList';
import classes from './Gallery.module.scss';
import PageContainer from '../../components/PageContainer/PageContainer';

export default function Gallery() {
  const { data } = useContext(BirdsContext);
  return data ? (
    <PageContainer title="Gallery">
      <GalleryList birds={data} />
    </PageContainer>
  ) : (
    <Loading />
  );
}
