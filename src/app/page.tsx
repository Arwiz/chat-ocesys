
import { redirect, useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import Header from '@/components/header';

const Home = async ({ children }: any) => {
  const session = await getServerSession();
   console.log('Session122121');
  if (session) {
    console.log('Session', session);
    redirect('/dashboard');
  } else {
    redirect('/auth/login');
  }
  
  return (
  <div>
      <div> Audit Page123</div>      
  </div>
  );
};

export default Home;
