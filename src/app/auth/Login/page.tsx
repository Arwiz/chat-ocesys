'use client';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button, Checkbox, Label, TextInput, Card } from 'flowbite-react';
import { useAuth } from '@/hooks/useauth';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  

  const { signIn, user } = useAuth();
  const router = useRouter()

  const handleLogin = () => {
      console.log('Email:', email);
      console.log('Password:', password);
      signIn(email, password);
  };
  
  useEffect(() => {
    if (user) {
      //router.push('/Dashboard');
    }
    
  }, [user]);
    
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <button
              type="button"
              className="w-full py-2 px-4 text-white rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}