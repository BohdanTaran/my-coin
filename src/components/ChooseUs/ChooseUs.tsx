import Layout from '../Layout/Layout';
import handImg from '../../../public/hand.png';

import styles from './ChooseUs.module.scss';
import InfoCard from '../InfoCard/InfoCard';
import { useSelector } from 'react-redux';
import { selectCryptoList } from '../../store/cryptos/selectors';

const ChooseUs = () => {
  const currencies = useSelector(selectCryptoList);

  return (
    <Layout>
      <div className={styles.chooseUs}>
        <h1>Why you should choose us</h1>
        <div className={styles.content}>
          <div className={styles.left}>
            <InfoCard
              icon={currencies[0]?.image}
              title="COnNECT Your WALLET"
              description="Use Trust Wallet, Metamask or to connect to the app."
            />
            <InfoCard
              icon={currencies[1]?.image}
              title="SELECT YOUR QUANTITY"
              description="Upload your crypto and set a title, description and price."
            />
            <InfoCard
              icon={currencies[2]?.image}
              title="CONFIRM TRANSACTION"
              description="Earn by selling your crypto on our marketplace."
            />
          </div>
          <img src={handImg} alt="hand" />
          <div className={styles.right}>
            <InfoCard
              icon={currencies[3]?.image}
              title="RECEIVE YOUR OWN NFTS"
              description="Invest all your crypto at one place on one platform."
            />
            <InfoCard
              icon={currencies[4]?.image}
              title="TAKE A MARKET TO SELL"
              description="Discover, collect the right crypto collections to buy or sell."
            />
            <InfoCard
              icon={currencies[5]?.image}
              title="DRIVE YOUR COLLECTION"
              description="We make it easy to Discover, Invest and manage."
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChooseUs;
