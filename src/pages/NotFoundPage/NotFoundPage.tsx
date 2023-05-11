import React, { useState } from 'react';
import { Navigate } from 'react-router';

import classes from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const [redirect, setRedirect] = useState(false);

  setTimeout(() => setRedirect(!redirect), 2000);

  return redirect ? <Navigate to="/" replace /> : <section className={classes.error}>404</section>;
};

export default NotFoundPage;
