import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useLoginMutation } from '../entities/user/api/userApi';

interface ILoginPageProps {}

type TForm = {
  email: string;
  password: string;
};

const LoginPage: FC<ILoginPageProps> = ({}) => {
  const isAuth = localStorage.getItem('isAuth');
  const navigate = useNavigate();

  const [form, setForm] = useState<TForm>({
    email: '',
    password: ''
  });

  const [login] = useLoginMutation();

  useEffect(() => {
    if (isAuth) {
      navigate('/posts');
    }
  }, [isAuth]);

  const onChange = (fieldName: keyof TForm, value: string) => {
    setForm({
      ...form,
      [fieldName]: value
    });
  };

  const onLogin = () => {
    login(form);
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4 ">
      <div className="text-xl">Login Page</div>
      <div className="flex flex-col gap-2 w-[300px]">
        <div>
          <input
            className="border p-2 w-full"
            value={form.email}
            onChange={e => onChange('email', e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            className="border p-2 w-full"
            value={form.password}
            onChange={e => onChange('password', e.target.value)}
            placeholder="Password"
          />
        </div>
        <button
          className="bg-blue-300 p-2"
          onClick={onLogin}
        >
          Login
        </button>
        <Link
          className="text-center text-sm"
          to="/register"
        >
          Register now
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
