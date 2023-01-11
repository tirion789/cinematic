import React, { useState } from 'react';
import styles from './header.module.scss';
import { useAuth } from '../../hooks/auth';
import { removeUser } from '../../redux/slices/userSlice';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import Modal from '../Modal/modal';

const Header: React.FC = () => {
  const { isAuth, emails } = useAuth();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <ul className={styles.header__list}>
        <li>
          <Link className={styles.header__name} to={'/'}>
            CINETREX
          </Link>
        </li>
        {isAuth ? (
          <>
            <li>
              <Link style={{ color: 'black' }} to={'/user'}>
                {emails}
              </Link>
            </li>
            <li>
              <Link onClick={() => dispatch(removeUser())} to={'/'}>
                Выйти
              </Link>
            </li>
          </>
        ) : (
          <li className={styles.header__buttons_list}>
            <a onClick={() => setOpen(true)} className={styles.header__buttons}>
              Sign in
            </a>
            <a className={styles.header__buttons}>Join</a>
          </li>
        )}
      </ul>
      <Modal setOpen={setOpen} open={open} />
    </header>
  );
};

export default Header;
