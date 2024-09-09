import { useDispatch, useSelector } from 'react-redux';
import Icon from '../Icon/Icon';
import styles from './Header.module.scss';
import { selectOpenState } from '../../store/menu/selectors';
import { toggleMenu } from '../../store/menu/slice';
import Layout from '../Layout/Layout';
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

const Header = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector(selectOpenState);

  const handleMenu = () => {
    dispatch(toggleMenu(!menuOpen));
  };

  return (
    <Layout className={styles.layout}>
      <div className={styles.header}>
        <Link to={'/'} className={styles.logo}>
          MY COIN
        </Link>
        <nav className={styles.navigation}>
          <ul>
            {data.map((i, index) => (
              <Link to={`${i.link}`} key={index} className={styles.li}>
                {i.name}
              </Link>
            ))}
          </ul>
        </nav>
        <Icon
          icon="menu"
          className={`${styles.menu} ${styles.icon}`}
          onClick={handleMenu}
        />
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
  );
};

export default Header;
