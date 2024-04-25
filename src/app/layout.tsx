import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NAAuthProvider } from '@/providers/NAAuthProvider';
import AppBar from '@/components/profile';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import StoreProvider from '../redux/StoreProvider';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="dark">
                <StoreProvider>
                    <NAAuthProvider>
                        <main>
                            <div className=" bg-black">
                                {children}
                            </div>
                         </main>
                    </NAAuthProvider>
                    </StoreProvider>
            </body>
        </html>
    );
}
