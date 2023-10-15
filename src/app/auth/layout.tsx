'use client'
import React, { useEffect } from 'react'
import { useAuth } from '@/hooks/useauth';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
 import { authOptions } from '../api/auth/[...nextauth]/route';

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {

  return (
      <div className='bg-color-red-500'>
          <div>HHello from Internal Layout</div>
          {children}
      </div>
  )
}

export default Layout