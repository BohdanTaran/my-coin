import { ReactNode } from 'react';
import cn from 'classnames';

import styles from './Layout.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className }: Props) => {
  return <div className={cn(styles.layout, className)}>{children}</div>;
};

export default Layout;
