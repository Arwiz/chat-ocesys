'use client';

import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { useRouter } from 'next/navigation';

export type AuthContextType = {
    user?: User | undefined;
    signIn?: (email: string, passsword: string) => void;
    signOut?: () => void;
};

export type User = {
    id?: string;
    email: string;
    password?: string;
};

export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

export const AuthContexProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [user, setUser] = useState<User | undefined>();
    const router = useRouter();
    useEffect(() => {}, []);

    const signIn = (email: string, passsword: string) => {
        const person = {
            email,
            passsword,
        };
        setUser(person);
        console.log('this is sign in function');
        router.push('/dashboard');
    };

    const signOut = () => {
        console.log('this is sign Out function');
        setUser(undefined);
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
