import { useDispatch, useSelector } from 'react-redux';
import Icon from '../Icon/Icon';
import Layout from '../Layout/Layout';
import styles from './Menu.module.scss';
import { selectOpenState } from '../../store/menu/selectors';
import { toggleMenu } from '../../store/menu/slice';
import { Link } from 'react-router-dom';

const data = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Market',
    link: '/market',
  },
  {
    name: 'Choose Us',
    link: '/choose-us',
  },
  {
    name: 'Join',
    link: '/join',
  },
];

const Menu = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector(selectOpenState);

  const handleMenu = () => {
    dispatch(toggleMenu(!menuOpen));
  };

  return (
    <div className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
      <Icon
        icon="close"
        className={`${styles.icon} ${styles.close}`}
        onClick={handleMenu}
      />
      <Layout>
        <div className={styles.content}>
          <nav className={styles.navigation}>
            <ul>
              {data.map((i, index) => (
                <Link
                  to={`${i.link}`}
                  key={index}
                  className={styles.li}
                  onClick={handleMenu}
                >
                  {i.name}
                </Link>
              ))}
            </ul>
          </nav>
          <div className={`${styles.social} ${styles.icon}`}>
            <Icon
              width={32}
              height={32}
              icon="instagram"
              className={styles.icon}
            />
            <Icon icon="twitter" className={styles.icon} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Menu;
