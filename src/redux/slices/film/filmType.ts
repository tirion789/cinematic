export type filmItem = {
  ImgUrl: string;
  title: string;
  time: string;
  rating: string;
  description: string;
  country: string;
  flag: string;
  genre: string[];
  id: string;
  video: string;
  release: string;
  director: string[];
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum FilmStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum AuthStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum RegisterStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface filmSliceState {
  items: filmItem[];
  status: Status;
  filmStatus: FilmStatus;
  authStatus: AuthStatus;
  registerStatus: RegisterStatus;
  activeGenres: string[];
  currentItem: filmItem | null;
  loginFail: boolean;
  registerFail: boolean;
}

export type auth = {
  password: {
    isEmpty: boolean;
    minLength: boolean;
    maxLength: boolean;
    emailError: boolean;
    inputValid: boolean;
    value: string;
    isDirty: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

  email: {
    isEmpty: boolean;
    minLength: boolean;
    maxLength: boolean;
    emailError: boolean;
    inputValid: boolean;
    value: string;
    isDirty: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
};
