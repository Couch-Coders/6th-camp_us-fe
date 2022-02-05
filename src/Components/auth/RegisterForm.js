import { useContext } from 'react';
import { UserContext } from './AuthProvider';

const RegisterForm = ({ setRegisterFormOpen }) => {
  const { setUser } = useContext(UserContext);

  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`nickname :${event.target.nickname.value}`);
    const res = await fetch('/users', {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify({
        nickname: event.target.nickname.value,
      }),
    });
    const user = await res.json();
    console.log(`post /users ${JSON.stringify(user)}`);
    setRegisterFormOpen(false);
    setUser(user);
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
