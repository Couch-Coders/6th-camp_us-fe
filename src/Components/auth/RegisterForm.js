import { useContext } from 'react';
import { UserContext } from './AuthProvider';
import { auth } from '../../Service/firebaseAuth';
import axios from 'axios';
import styled from 'styled-components';

const RegisterForm = ({ setRegisterFormOpen }) => {
  const { setUser } = useContext(UserContext);

  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: '',
  };

  const handleSubmit = (event) => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      event.preventDefault();
      const token = await firebaseUser.getIdToken();
      defaultHeaders.Authorization = `Bearer ${token}`;
      console.log(`nickname :${event.target.nickname.value}`);

      const res = await axios({
        method: 'POST',
        url: '/members',
        withCredentials: true,
        headers: defaultHeaders,
        data: JSON.stringify({
          nickname: event.target.nickname.value,
        }),
      });

      const user = res;
      setRegisterFormOpen(false);
      setUser(user);
    });
  };

  return (
    <RegisterWrap>
      <Form onSubmit={handleSubmit}>
        <NicknameInput type="text" name="nickname" placeholder="닉네임" />
        <Button type="submit" value="Sign up">
          가입 완료
        </Button>
      </Form>
    </RegisterWrap>
  );
};

export default RegisterForm;

const RegisterWrap = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const NicknameInput = styled.input`
  width: 200px;
  height: 30px;
  padding: 0px 10px;
  box-sizing: border-box;
  border: 0.1px solid #e0e0e0;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 200px;
  height: 30px;
  background-color: #4285f4;
  color: #ffffff;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
`;
