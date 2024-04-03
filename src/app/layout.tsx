import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NAAuthProvider } from '@/providers/NAAuthProvider';
import AppBar from '@/components/profile';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="dark bg-cover bg-center bg-[url('/background.jpeg')]">
                <NAAuthProvider>
                    <div className="ml-5 mr-5 bg-black">{children}</div>
                </NAAuthProvider>
            </body>
        </html>
    );
}
