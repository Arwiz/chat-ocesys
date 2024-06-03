
import { redirect, useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import Header from '@/components/header';
import { BackgroundVideo } from '@/components/BackgroundViewo';

const Home = async ({ children }: any) => {
  const session = await getServerSession();
   console.log('Session122121');
  if (session) {
    console.log('Session', session);
    // redirect('/dashboard');
  } else {
    redirect('/auth/login');
  }
  
  return (
     <div className="relative">
      <BackgroundVideo backgroundVideoUrl={"abcd.mp4"} foregroundVideoUrl={"https://www.youtube.com/watch?v=DyHaqdazKPY"} />
    </div>
  );
};

export default Home;
