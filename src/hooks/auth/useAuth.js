import { useEffect, useState } from 'react';
import axios from '../../utils/axiosConfig';
import { adminRequest } from '../../API';

export default function useAuth() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async (form) => {
    setAuthLoading(true);
    setError('');
    try {
      const response = await adminRequest.login(form);
      axios.setToken(response.token);
      sessionStorage.setItem('token', JSON.stringify(response.token));
      setIsAuthorized(true);
    } catch (e) {
      if (e.response) {
        setError(e.response.data.message);
      } else {
        setError(`${e}`);
      }
      setIsAuthorized(false);
    }
    setAuthLoading(false);
  };

  const logout = () => {
    axios.removeToken();
    sessionStorage.removeItem('token');
    setIsAuthorized(false);
  };

  const changePassword = async (form) => {
    try {
      await adminRequest.changePassword(form);
      return 'ok';
    } catch (e) {
      if (e.response) {
        return e.response.data.message;
      }
      return `${e}`;
    }
  };

  const checkToken = async () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setAuthLoading(true);
      axios.setToken(JSON.parse(token));
      try {
        await adminRequest.checkToken();
        setIsAuthorized(true);
      } catch {
        logout();
      }
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return {
    login, logout, isAuthorized, authLoading, error, changePassword,
  };
}
