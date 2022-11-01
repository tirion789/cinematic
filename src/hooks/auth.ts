import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const useAuth = () => {
  const { emails, token, id } = useSelector((state: RootState) => state.user);
  return {
    isAuth: !!emails,
    emails,
    id,
    token,
  };
};
