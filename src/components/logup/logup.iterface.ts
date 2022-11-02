import { ChangeEvent } from 'react';

export interface ILogup {
  emailHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  usernameHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  blurHandler: (e: { target: { name: string } }) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  passwordHandler: (e: ChangeEvent<HTMLInputElement>) => void;

  username: string;
  email: string;
  password: string;
  userDirty: boolean;
  usernameError: string;
  emailDirty: boolean;
  emailError: string;
  formValid: boolean;
  passwordDirty: boolean;
  passwordError: string;
}
