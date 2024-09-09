import { useSelector } from 'react-redux';
import Layout from '../Layout/Layout';

import styles from './Market.module.scss';
import { selectCryptoList } from '../../store/cryptos/selectors';
import { Pagination } from 'antd';
import { useState } from 'react';

const Market = () => {
  const currencies = useSelector(selectCryptoList);

  const [currentPage, setCurrentPage] = useState(1);

  const listOfPerPage = 10;
  const indexOfLastCoins = currentPage * listOfPerPage;
  const indexOfFirstCoins = indexOfLastCoins - listOfPerPage;
  const currentCoins = currencies?.slice(indexOfFirstCoins, indexOfLastCoins);

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

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
          {currentCoins.map((crypto) => (
            <div key={crypto.id} className={styles.coin}>
              <img width={35} src={crypto.image} alt={crypto.name} />
              <span>{crypto.current_price.toFixed(2)}$</span>
              <span
                className={`${crypto.price_change_percentage_24h > 0 ? styles.high : styles.low}`}
              >
                {crypto.price_change_percentage_24h.toFixed(3)}%
              </span>
              <span>{crypto.market_cap}$</span>
            </div>
          ))}
        </div>
        <Pagination
          align="center"
          defaultCurrent={1}
          total={currencies.length}
          showSizeChanger={false}
          current={currentPage}
          pageSize={listOfPerPage}
          onChange={handlePagination}
        />
      </div>
    </Layout>
  );
};

export default Market;
