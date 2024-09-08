import { useSelector } from 'react-redux';
import styles from './Hero.module.scss';
import { selectCryptoForHero } from '../../store/cryptos/selectors';
import heroImg from '../../../public/hero-img.png';

const Hero = () => {
  const currencies = useSelector(selectCryptoForHero);

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>TRACK AND TRADE</h1>
          <h2>CRYPTO CURRENCIES</h2>
        </div>
        <img className={styles.img} src={heroImg} alt="hero-img" />
      </div>
      <div className={styles.currencies}>
        {currencies.map((crypto) => (
          <div key={crypto.id} className={styles.item}>
            <img width={70} src={crypto.image} alt={crypto.name} />
            <span>{crypto.name}</span>
            <p className={styles.price}>{crypto.current_price.toFixed(2)} $</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
