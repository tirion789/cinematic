import { ChangeEvent } from 'react';

export interface ILogup {
  passwordHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  emailHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  usernameHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  blurHandler: (e: { target: { name: string } }) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;

  username: string;
  password: string;
  email: string;
  userDirty: boolean;
  usernameError: string;
  emailDirty: boolean;
  emailError: string;
  passwordDirty: boolean;
  passwordError: string;
  formValid: boolean;
}
