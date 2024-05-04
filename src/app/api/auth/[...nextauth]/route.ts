import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
import page from '@/app/auth/signup/page';
import type { NextAuthOptions } from 'next-auth';
import { SERVER_API_URL } from '@/utils/fetch-data';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'mandip@gmail.com',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                console.log('credentials ==== >', SERVER_API_URL);
                const headers = {
                    'Content-Type': 'application/json',
                };
                try {
                    const response = await axios.post(
                        `${SERVER_API_URL || 'http://localhost:3000'}/login`,
                        {
                            email: credentials?.email,
                            password: credentials?.password,
                        },
                        { headers }
                    );

                    const data = response.data;
                    console.log('..RESPONSE ==== >', data);
                    if (data) {
                        // Any object returned will be saved in `user` property of the JWT
                        return data;
                    } else {
                        // If you return null then an error will be displayed advising the user to check their details.
                        return null;

                        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                    }
                } catch (err) {
                    console.log('..REJECT ==== >', err);
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }: any) {
            return { ...token, ...user };
        },
        async session({ session, token, user }: any) {
            session.user = token as any;
            return session;
        },
    },
    pages: {
        signIn: '/',
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
