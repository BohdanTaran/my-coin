import { useDispatch } from 'react-redux';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import { useEffect } from 'react';
import { getCryptos } from '../store/cryptos/operations';
import { AppDispatch } from '../store/store';
import Footer from '../components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import TokenPage from '../pages/TokenPage/TokenPage';

import styles from './App.module.scss';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCryptos());
  }, [dispatch]);

  return (
    <div className={styles.appContainer}>
      <Menu />
      <Header />
      <main className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tokens/:id" element={<TokenPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
