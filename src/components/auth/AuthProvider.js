import React, { useEffect, useState } from 'react';
import { auth } from '../../service/firebaseAuth';
import * as api from '../../service/api';

export const UserContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const token = await firebaseUser.getIdToken();
          localStorage.setItem('token', 'Bearer ' + token);
          const res = await api.login();

          if (res.status === 200) {
            const user = res;
            setUser(user);
          }
        } catch (e) {
          //에러발생 시
          setIsRegisterOpen(true);
          throw new Error('register error');
        }
      } else {
        setUser(null);
        localStorage.clear();
      }
    });
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, isRegisterOpen, setIsRegisterOpen }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
