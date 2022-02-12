import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { auth } from '../../Service/firebaseAuth';
import Modal from '../Modal/Modal';

export const UserContext = React.createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerFormOpen, setRegisterFormOpen] = useState(false);

  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: '',
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const token = await firebaseUser.getIdToken();
          defaultHeaders.Authorization = `Bearer ${token}`;
          const res = await axios({
            method: 'GET',
            url: '/members/me',
            withCredentials: true,
            headers: defaultHeaders,
          });

          console.log(res);

          if (res.status === 200) {
            const user = res;
            setUser(user);
          }
        } catch (e) {
          //에러발생 시
          console.log('로그인 된 회원 없음 ');
          // setRegisterFormOpen(true);
        }
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {registerFormOpen ? (
        <Modal setRegisterFormOpen={setRegisterFormOpen} role="register" />
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};

export default AuthProvider;
