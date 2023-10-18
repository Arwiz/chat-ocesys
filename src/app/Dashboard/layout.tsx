import Header from '@/components/header'
import { getServerSession } from 'next-auth'
import React from 'react'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

type Props = {
  children: React.ReactNode
}
const DashboardLayout =  async (props: Props) => {
  return (
    <>
         <Header></Header>
        { props.children}
      </>
  )
}

export default DashboardLayout