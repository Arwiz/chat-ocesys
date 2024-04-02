import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Profile from './profile';


// const links = ["Products", "Analytics", "Settings","Contact Us", "Profile"];


const links = [
    {
        title: "Products",
        link: "/dashboard/products"
    },
    {
        title: "Analytics",
        link: "/dashboard/analytics"
    },
    {
        title: "Setting",
        link: "/dashboard/setting"
    },
    {
        title: "Poker",
        link: "/dashboard/poker"
    },
    {
        title: "Profile",
        link: "/dashboard/profile"
    },
    {
        title: "Roster",
        link: "/dashboard/roster"
    },
];

type Props = {}

const Header = (props: Props) => {
  return (
      <div className=" bg-yellow-300 sm:flex-1 md:flex justify-between items-center  md:h-14 sticky">
          <div className="flex justify-start items-center pl-5 pb-5">
              <object data="/images/ocesys_logo.svg" width="100" height="100"/>
          </div>
        <div className='xm:p-5  sm:flex md:flex md:float-right justify-end md:gap-6  md:h-14'>
              {
                  links?.map(({link , title}) => (<div id={link} className='ml-10 pt-4 hover:text-orange-400 focus:ring-orange-400'>
                      <Link href={link}>{title}</Link>
                  </div>))
              }
              <Profile></Profile>
        </div>
    </div>
  )
}

export default Header