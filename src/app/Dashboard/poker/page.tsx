"use client";
import ItemList from '@/components/list';
import StoryCard, { Story } from '@/components/storycard';
import UserCard from '@/components/usercard';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client';

type Props = {}


interface Project {
  name: string,
  _id?: string
  type: string
}



interface Participant {
  email?: string,
  _id?: string
  password?: string
}

const page = (props: Props) => {

  const [projects, setProjects] = useState<Project[]>([])
  
  const session = useSession();
  const router = useRouter();



  
  useEffect( () => {
    // Fetch all used list
    console.log('1==>')
    async function fetUsers() {

      try {

        const token = session.data?.user?.token;
        const headers = {
          Authorization: token,
          'Content-Type': 'application/json',
        };
        if (token) {
          const response = await fetch('http://localhost:3000/api/Docs/PROJECT', {
            method: 'GET',
            headers
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          console.log('sdfsdfdfss data', data)
          setProjects(data);
        }
        
      } catch (error) {
        
      } finally {
      }

  
    }
    fetUsers();

   },[session]);



 
  return (
    <>
      <div className='flex'>
      <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white text-center mt-10 mb-10">
          <p>"Projects"</p>
      </blockquote>

        <ItemList items={projects} />
      
      </div>
      </>
  )
}

export default page