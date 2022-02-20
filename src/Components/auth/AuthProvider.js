import React, { useEffect, useState } from 'react';
import { auth } from '../../Service/firebaseAuth';
import { signOut } from '../../Service/firebaseAuth';
import * as api from '../../Service/camps';

export const UserContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const token = await firebaseUser.getIdToken();
          localStorage.setItem('token', 'Bearer ' + token);
          const res = await api.login();

          console.log(res);

          if (res.status === 200) {
            const user = res;
            setUser(user);
          }
        } catch (e) {
          //에러발생 시
          signOut();
          setIsRegister(true);
          throw new Error('register error');
        }
      } else {
        setUser(null);
        localStorage.clear();
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isRegister }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
