import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Profile from './profile';

const links = [
    {
        title: 'Home',
        link: '/dashboard',
    },
    {
        title: 'Organizations',
        link: '/dashboard/organizations',
    },
     {
        title: 'Audit',
        link: '/dashboard/audit',
    },
    {
        title: 'Analytics',
        link: '/dashboard/analytics',
    },
    {
        title: 'Setting',
        link: '/dashboard/setting',
    },
    {
        title: 'Poker',
        link: '/dashboard/poker',
    },
    {
        title: 'Profile',
        link: '/dashboard/profile',
    },
    {
        title: 'Roster',
        link: '/dashboard/roster',
    },
];

type Props = {};

const Header = (props: Props) => {
    return (
        <div className="sm:flex-1  md:flex bg-yellow-400  justify-between items-center sticky  md:h-14 ">
            <div className="flex justify-start items-center pl-5 md:pb-5 xm: pt-1">
                <object
                    data="/images/ocesys_logo.svg"
                    width="100"
                    height="100"
                />
            </div>
            <div className="sm:pl-5 md:flex   md:float-right justify-end   md:h-14">
                {links?.map(({ link, title }) => (
                    <div
                        key={link}
                        className="p-5 pt-4 pb-4 hover:text-blue-800 focus:ring-blue-800"
                    >
                        <Link href={link}>{title}</Link>
                    </div>
                ))}
                {/* <Profile></Profile> */}
            </div>
        </div>
    );
};

export default Header;
