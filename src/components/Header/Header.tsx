import { useDispatch, useSelector } from 'react-redux';
import Icon from '../Icon/Icon';
import styles from './Header.module.scss';
import { selectOpenState } from '../../store/menu/selectors';
import { toggleMenu } from '../../store/menu/slice';

const data = [
  {
    name: 'Home',
    link: '/home',
  },
  {
    name: 'About Us',
    link: '/home',
  },
  {
    name: 'Carrier',
    link: '/home',
  },
  {
    name: 'Contacts',
    link: '/home',
  },
];

const Header = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector(selectOpenState);

  const handleMenu = () => {
    dispatch(toggleMenu(!menuOpen));
  };

  return (
    <div className={styles.header}>
      <span className={styles.logo}>MY COIN</span>
      <nav className={styles.navigation}>
        <ul>
          {data.map((i, index) => (
            <li key={index}>{i.name}</li>
          ))}
        </ul>
      </nav>
      <Icon
        icon="menu"
        className={`${styles.menu} ${styles.icon}`}
        onClick={handleMenu}
      />
      <div className={`${styles.social} ${styles.icon}`}>
        <Icon width={32} height={32} icon="instagram" className={styles.icon} />
        <Icon icon="twitter" className={styles.icon} />
      </div>
    </div>
  );
};

export default Header;
