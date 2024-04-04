// import { useAuth } from '@/hooks/useauth';
// import { AuthContexProvider } from '@/providers/AuthContexProvider';
// import Image from 'next/image';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react';
// import AppBar from '@/components/profile';
// import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';

interface PageProps {
  children: ReactNode;
}

const Home: React.FC<PageProps> = async ({ children }) => {
  const session = await getServerSession();
  console.log(session);
      if (session) {
        redirect('/dashboard');
      } else {
        redirect('/auth/login');
      }
  return <main>{children}</main>;
};

export default Home;
