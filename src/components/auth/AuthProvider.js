import React, { useEffect, useState } from 'react';
import { auth } from '../../service/firebaseAuth';
import * as api from '../../service/api';

export const UserContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  function getRefreshToken(firebaseUser) {
    setTimeout(async () => {
      try {
        const token = await firebaseUser.getIdToken(true);
        console.log(token);
        localStorage.setItem('token', 'Bearer ' + token);
        getRefreshToken(firebaseUser);
      } catch (error) {
        throw new Error(error);
      }
    }, 3540000);
  }

  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const token = await firebaseUser.getIdToken(true);
          localStorage.setItem('token', 'Bearer ' + token);
          const res = await api.login();

          if (res.status === 200) {
            const user = res;
            setUser(user);
            getRefreshToken(firebaseUser);
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
