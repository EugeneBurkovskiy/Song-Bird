import Header from './components/Header/Header';
import React from 'react';
import Router from './router/Router';

function App() {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
    </>
  );
}

export default App;
