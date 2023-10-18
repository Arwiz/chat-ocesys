import { useAuth } from '@/hooks/useauth';
import { AuthContexProvider } from '@/providers/AuthContexProvider';
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import AppBar from '@/components/profile';
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';

export default  async function Home({children}: { children: React.ReactNode}) {
  
  const session = await getServerSession();
  if (session) {
      redirect('/dashboard');
  } else {
      redirect('/auth/login');
  }
  
  return (
    <main>
       {children}
    </main>
  )
}
