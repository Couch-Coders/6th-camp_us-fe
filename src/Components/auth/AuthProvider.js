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
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const token = await firebaseUser.getIdToken();
        defaultHeaders.Authorization = `Bearer ${token}`;
        const res = await fetch('/members/me', {
          method: 'GET',
          headers: defaultHeaders,
        });
        if (res.status === 204) {
          const user = await res.json();
          setUser(user);
        } else if (res.status === 404) {
          const data = await res.json();
          if (data.code === 'USER_NOT_FOUND') {
            setRegisterFormOpen(true);
          }
        }
      } else {
        delete defaultHeaders.Authorizations;
        setUser(null);
      }
    });
  }, []);

  console.log(registerFormOpen);

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
