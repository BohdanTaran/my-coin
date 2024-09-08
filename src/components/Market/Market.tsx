import { useSelector } from 'react-redux';
import Layout from '../Layout/Layout';

import styles from './Market.module.scss';
import { selectCryptoList } from '../../store/cryptos/selectors';

const Market = () => {
  const currencies = useSelector(selectCryptoList);

  return (
    <Layout>
      <div className={styles.market}>
        <h1>MARKET</h1>
        <div className={styles.table}>
          <div className={styles.head}>
            <span>Coin</span>
            <span>Price</span>
            <span>24h Change</span>
            <span>Market Cap</span>
          </div>
          {currencies.map((crypto) => (
            <div key={crypto.id} className={styles.coin}>
              <img width={35} src={crypto.image} alt={crypto.name} />
              <span>{crypto.current_price}$</span>
              <span
                className={`${crypto.price_change_percentage_24h > 0 ? styles.high : styles.low}`}
              >
                {crypto.price_change_percentage_24h.toFixed(3)}%
              </span>
              <span>{crypto.market_cap}$</span>
            </div>
          ))}
        </div>
      </div>

      {/* TODO PAGINATION */}
    </Layout>
  );
};

export default Market;
