import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectToken } from '../../store/cryptos/selectors';
import { RootState } from '../../store/store';
import Layout from '../../components/Layout/Layout';

import styles from './TokenPage.module.scss';

const TokenPage = () => {
  const { id } = useParams();

  const token = useSelector((state: RootState) =>
    id ? selectToken(state, id) : null,
  );

  return (
    <Layout className={styles.layout}>
      <div className={styles.content}>
        <div className={styles.info}>
          <img src={token?.image} alt="tokenImg" className={styles.img} />
          <div className={styles.text}>
            <span>{token?.name}</span>
            <span className={styles.price}>{token?.current_price}$</span>
            <span>token: {token?.symbol}</span>
            <span>
              24h Change: {token?.price_change_percentage_24h.toFixed(3)}%
            </span>
          </div>
        </div>
        <div className={styles.chart}></div>
      </div>
    </Layout>
  );
};

export default TokenPage;
