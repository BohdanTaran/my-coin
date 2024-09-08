import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Menu from '../Menu/Menu';
import { useEffect } from 'react';
import { getHeroCrypto } from '../../store/cryptos/operations';
import { AppDispatch } from '../../store/store';
import Market from '../Market/Market';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getHeroCrypto());
  }, [dispatch]);

  return (
    <>
      <Menu />
      <Header />
      <Hero />
      <Market />
    </>
  );
}

export default App;
