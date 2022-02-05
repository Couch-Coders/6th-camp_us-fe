import { useContext } from 'react';
import { UserContext } from './AuthProvider';
import { auth } from '../../Service/firebaseAuth';
import axios from 'axios';

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

      console.log(res);
      const user = await res.json();
      console.log(`post /members ${JSON.stringify(user)}`);
      setRegisterFormOpen(false);
      setUser(user);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="nickname">Enter your nickname</label>
        <input className="nickname" type="text" name="nickname" />
        <input className="signup" type="submit" value="Sign up" />
      </form>
    </div>
  );
};

export default RegisterForm;
