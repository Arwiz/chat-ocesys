'use client'
import React, { useEffect } from 'react'
import { useAuth } from '@/hooks/useauth';
import { useRouter } from 'next/navigation';

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    const { user } = useAuth();
  return (
      <div className='bg-color-red-500'>
          <div>HHello from Internal Layout{ user?.email}</div>
          {children}
      </div>
  )
}

export default Layout