import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegisterMutation } from '../entities/user/api/userApi';
import type { IRequestRegisterApi } from '../entities/user/api/types';

interface IRegisterPageProps {}

const RegisterPage: FC<IRegisterPageProps> = ({}) => {
  const [form, setForm] = useState<IRequestRegisterApi>({
    email: '',
    password: '',
    repeat_password: ''
  });

  const [register] = useRegisterMutation();

  const onChange = (fieldName: keyof IRequestRegisterApi, value: string) => {
    setForm({
      ...form,
      [fieldName]: value
    });
  };

  const onRegister = () => {
    register(form);
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4 ">
      <div className="text-xl">Register Page</div>
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
        <div>
          <input
            className="border p-2 w-full"
            value={form.repeat_password}
            onChange={e => onChange('repeat_password', e.target.value)}
            placeholder="Repeat password"
          />
        </div>
        <button
          className="bg-blue-300 p-2"
          onClick={onRegister}
        >
          Register
        </button>
        <Link
          className="text-center text-sm"
          to="/login"
        >
          Have account? Log in
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
