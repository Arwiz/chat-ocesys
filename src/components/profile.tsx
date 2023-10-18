"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const Profile = () => {
    const router = useRouter();
  const { data: session } = useSession();
    console.log({ session });
    
  if (!session?.user) {
    redirect('/auth/login');
  }

  return (
    <div className="bg-gradient-to-b from-cyan-50 to-cyan-200 p-2 flex gap-5 ">
      <div className="ml-auto flex gap-2">
        {session?.user ? (
          <>
            <p className="text-sky-600"> {session.user.email}</p>
            <button className="text-red-500" onClick={() => signOut()}>
              Sign Out
            </button>
          </>
        ) : (
          <button className="text-green-600" onClick={() => router.replace('/auth/login')}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;