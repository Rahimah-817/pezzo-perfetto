'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Header() {
  const session = useSession();

  const status = session.status;

  return (
    <header className='flex items-center justify-between'>
      <nav className='flex items-center gap-8 text-gray-500 font-semibold'>
        <Link href='/' className='text-primary font-semibold text-2xl'>
          PEZZO PERFETTO
        </Link>
        <Link href={'/'}>Home</Link>
        <Link href={'/menu'}>Menu</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
      </nav>
      <nav className='flex items-center gap-4 text-gray-500 font-semibold'>
        {status === 'authenticated' && (
          <button
            onClick={() => signOut()}
            className='bg-primary rounded-full text-white px-4 py-2'>
            Logout
          </button>
        )}
        {status === 'unauthenticated' && (
          <>
            <Link href={'/login'}>Login</Link>
            <Link
              href={'/register'}
              className='bg-primary rounded-full text-white px-4 py-2'>
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
