'use client';
import { useAuth } from '@/hooks/useauth';
import { AuthContexProvider } from '@/providers/AuthContexProvider';
import Image from 'next/image';
import { redirect, useRouter } from 'next/navigation';
import React, { useEffect, ReactNode } from 'react';
import AppBar from '@/components/profile';
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';

interface PageProps {
    children: ReactNode;
}

const Home: React.FC<PageProps> = ({ children }) => {
    useEffect(() => {
        const checkSession = async () => {
            const session = await getServerSession();
            if (session) {
                redirect('/dashboard');
            } else {
                redirect('/auth/login');
            }
        };

        checkSession();
    }, []);

    return <main>{children}</main>;
};

export default Home;
