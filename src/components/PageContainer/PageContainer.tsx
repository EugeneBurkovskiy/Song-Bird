import React from 'react';
import Container from '../Container/Container';
import classes from './PageContainer.module.scss';

export default function PageContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
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
}
