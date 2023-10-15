'use client';
import { useAuth } from '@/hooks/useauth';
import { AuthContexProvider } from '@/providers/AuthContexProvider';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import AppBar from '@/components/AppBar';

export default function Home({children}: { children: React.ReactNode}) {
  const router = useRouter();
  // console.log('Layout', user?.email);

  // useEffect(() => {
  //   console.log('user=>', user);
  //     if (user) {
  //         router.push('/Dashboard');
  //     } else {
  //         router.push('/auth/Login');
  //     }
  // }, [user]);
  
  return (
    <main>
      <div>
        <div>This is root Page</div>
11      {children}
        <div> This is root page Bottom</div>
      </div>
    </main>
  )
}
