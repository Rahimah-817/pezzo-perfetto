'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);

    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  }

  return (
    <section className='my-8'>
      <h1 className='text-center text-primary text-4xl mb-4'>Register</h1>
      {userCreated && (
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
      )}
      <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
        <input
          type='email'
          placeholder='email'
          value={email}
          disabled={creatingUser}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          disabled={creatingUser}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Register</button>
        <div className='my-4 text-sm text-center text-gray-500'>
          or login with provider
        </div>
        <button className='flex gap-4 justify-center'>
          <Image src={'/google.png'} width={24} height={24} alt='Google' />
          Login with google
        </button>
        <div className='text-center text-gray-500 mt-4 text-sm border-t pt-2'>
         Do you have an account?{' '}
          <Link className='underline' href={'/login'}>
            Login
          </Link>
        </div>
      </form>
    </section>
  );
}
