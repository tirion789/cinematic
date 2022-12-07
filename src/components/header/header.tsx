import React from 'react';
import styles from './header.module.scss';
import { useAuth } from '../../hooks/auth';
import { removeUser } from '../../redux/slices/userSlice';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import Modal from '../Modal/modal';

type MainProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<MainProps> = ({ setOpen }) => {
  const { isAuth, emails } = useAuth();
  const dispatch = useAppDispatch();

  return (
    <div className={styles.header}>
      <ul className={styles.header__list}>
        <li className={styles.header__name}>CINETREX</li>
        {isAuth ? (
          <Link style={{ color: 'black' }} onClick={() => dispatch(removeUser())} to={'/'}>
            {emails}
          </Link>
        ) : (
          <li className={styles.header__buttons_list}>
            <a onClick={() => setOpen(true)} className={styles.header__buttons}>
              Sign in
            </a>
            <a className={styles.header__buttons}>Join</a>
          </li>
        )}
      </ul>
      <Modal
        setOpen={function (): void {
          throw new Error('Function not implemented.');
        }}
        open={false}
      />
    </div>
  );
};

export default Header;
