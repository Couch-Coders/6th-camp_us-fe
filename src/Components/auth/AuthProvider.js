import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { auth } from '../../Service/firebaseAuth';
import RegisterForm from './RegisterForm';

export const UserContext = React.createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerFormOpen, setRegisterFormOpen] = useState(false);

  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: '',
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      console.log('로그인 전');
      if (firebaseUser) {
        console.log('로그인 후');
        try {
          const token = await firebaseUser.getIdToken();
          // console.log(token);
          defaultHeaders.Authorization = `Bearer ${token}`;

          const res = await axios({
            method: 'GET',
            url: '/members/me',
            withCredentials: true,
            headers: defaultHeaders,
          });

          console.log(res);

          if (res.status === 200) {
            const user = await res;
            setUser(user);
          }
        } catch (e) {
          //에러발생 시
          console.log('로그인 된 회원 없음 ');
          setRegisterFormOpen(true);
        }
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {registerFormOpen ? (
        <RegisterForm setRegisterFormOpen={setRegisterFormOpen} />
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};
