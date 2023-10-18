'use client';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button, Checkbox, Label, TextInput, Card } from 'flowbite-react';
// import { useAuth } from '@/hooks/useauth';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';


export default function Login() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
    
  const router= useRouter()

  const handleLogin = async () => {
      console.log('Email:', email);
      console.log('Password:', password);
  const res = await signIn("credentials", { email, password ,redirect: false});
  console.log("REsponse ", res);
  if (res.status === 200) {
    router.push('/dashboard')
    }

  };
    
return (
  <div className=" min-h-screen flex items-center justify-center ">
      <Card className="p-8 rounded shadow-lg max-w-md">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">OCESYS</h1>
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 py-2 px-3 border border-gray-300  text-yellow-400 rounded-md"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 py-2 px-3 border border-gray-300  text-yellow-400 rounded-md"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <button
              type="button"
              className="w-full py-2 px-4 text-white rounded-md bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-blue-200"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}