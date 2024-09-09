import Icon from '../Icon/Icon';
import Layout from '../Layout/Layout';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Layout>
        <div className={styles.content}>
          <Icon icon="instagram" className={styles.icon} />
          <Icon icon="twitter" className={styles.icon} />
          <a target="_blank" href="https://github.com/BohdanTaran">
            <Icon icon="github" className={styles.icon} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/bohdan-taran-6baab3311/"
          >
            <Icon icon="linkedin" className={styles.icon} />
          </a>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
