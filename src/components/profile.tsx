'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';

const Profile = () => {
    const router = useRouter();
    const { data: session } = useSession();
    console.log({ session });

    if (!session?.user) {
        redirect('/auth/login');
    }

    return (
        <div className="p-2 flex float-start ">
            <div className="ml-auto flex gap-2">
                {session?.user ? (
                    <>
                        <p className="text-sky-600"> {session.user.email}</p>
                        <button
                            className=" text-white underline underline-offset-2"
                            onClick={() => signOut()}
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <button
                        className="text-green-600"
                        onClick={() => router.replace('/auth/login')}
                    >
                        Sign In
                    </button>
                )}
            </div>
        </div>
    );
};

export default Profile;
