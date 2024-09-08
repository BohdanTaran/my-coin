import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Layout from '../Layout/Layout';
import Menu from '../Menu/Menu';
import { useEffect } from 'react';
import { getHeroCrypto } from '../../store/cryptos/operations';
import { AppDispatch } from '../../store/store';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getHeroCrypto());
  }, [dispatch]);

  return (
    <>
      <Menu />
      <Layout>
        <Header />
        <Hero />
      </Layout>
    </>
  );
}

export default App;
