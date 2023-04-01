import Header from './components/Header/Header';
import React from 'react';
import Router from './router/Router';
import Footer from './components/Footer/Footer';
import BirdsContextProvider from './context/BirdsContext';

function App() {
  return (
    <>
      <Header />
      <BirdsContextProvider>
        <main>
          <Router />
        </main>
      </BirdsContextProvider>
      <Footer />
    </>
  );
}

export default App;
