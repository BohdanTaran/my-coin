import Icon from '../Icon/Icon';
import Layout from '../Layout/Layout';
import styles from './Join.module.scss';

const Join = () => {
  return (
    <Layout>
      <div className={styles.join}>
        <div className={styles.text}>
          <h1>JOIN US VIA</h1>
          <h2>INSTAGRAM</h2>
          <span>Invest and manage all your crypto at one place.</span>
        </div>
        <Icon icon="instagram" className={styles.icon} />
      </div>
    </Layout>
  );
};

export default Join;
