import React from 'react';

import Container from '../Container/Container';

import classes from './PageContainer.module.scss';

interface IProps {
  children: React.ReactNode;
  title?: string;
}

const PageContainer: React.FC<IProps> = ({ children, title }) => {
  return (
    <article className={classes.page}>
      <section>
        <Container>
          <h2 className={classes.page__title}>{title}</h2>
          {children}
        </Container>
      </section>
    </article>
  );
};

export default PageContainer;
