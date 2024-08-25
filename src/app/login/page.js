'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoginInProgress(true);

    await signIn('credentials', { email, password });

    setLoginInProgress(false);
  }

  return (
    <section className='my-8'>
      <h1 className='text-center text-primary text-4xl mb-4'>Login</h1>
      {/* {userCreated && (
          <div className='my-4 text-center text-gray-600'>
            User created. Now you can{' '}
            <Link href={'/login'} className='underline'>
              Login
            </Link>
          </div>
        )}
        {error && (
          <div className='my-4 text-center text-red-600'>
            An error has occured. Please try again later
          </div>
        )} */}
      <form className='max-w-xs mx-auto' onSubmit={handleFormSubmit}>
        <input
          type='email'
          placeholder='email'
          disabled={loginInProgress}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          disabled={loginInProgress}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' disabled={loginInProgress}>
          Login
        </button>
        <div className='my-4 text-sm text-center text-gray-500'>
          or login with provider
        </div>
        <button className='flex gap-4 justify-center'>
          <Image src={'/google.png'} width={24} height={24} alt='Google' />
          Login with google
        </button>
        <div className='text-center text-gray-500 mt-4 text-sm border-t pt-2'>
          Create an account?{' '}
          <Link className='underline' href={'/register'}>
            Register
          </Link>
        </div>
      </form>
    </section>
  );
}
