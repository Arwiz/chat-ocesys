import React from 'react';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

type Props = {};

export default async function Register(props: Props) {
    const session = await getServerSession(authOptions);
    console.log('session of the server', session);

    if (session) {
        redirect('/dashboard');
    }

    return <div>Sign up page qw3er</div>;
}
