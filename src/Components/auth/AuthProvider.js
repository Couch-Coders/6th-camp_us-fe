import React, { useEffect, useState } from 'react';
import { auth } from '../../Service/firebaseAuth';
import Modal from '../Modal/Modal';
import axiosInstance from '../../Common/axiosInstance';

export const UserContext = React.createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerFormOpen, setRegisterFormOpen] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // const token = await firebaseUser.getIdToken();
          // defaultHeaders.Authorization = `Bearer ${token}`;
          // console.log(defaultHeaders.Authorization);
          const token = await firebaseUser.getIdToken();
          localStorage.setItem('token', 'Bearer ' + token);
          const res = await axiosInstance.get('/members/me');

          console.log(res);

          if (res.status === 200) {
            const user = res;
            setUser(user);
          }
        } catch (e) {
          //에러발생 시
          setRegisterFormOpen(true);
          throw new Error('register error');
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
