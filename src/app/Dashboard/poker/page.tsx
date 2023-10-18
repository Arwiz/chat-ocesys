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

  const [participant, setParticipant] = useState<Participant[]>([])
  const [stories, setStories] = useState<Story[]>([])
  
  const session = useSession();
  const router = useRouter();



  const getStories = (project: Project) => {
    async function fetStories() {

      console.log('project', project);
      try {

        const token = session.data?.user?.token;
        const headers = {
          Authorization: token,
          'Content-Type': 'application/json',
        };
        if (token) {
          const response = await fetch(`http://localhost:3000/api/stories/${project._id}`, {
            method: 'GET',
            headers
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          console.log('sdfsdfdfss data', data)
          setStories(data);
        }
        
      } catch (error) {
        
      } finally {
      }
    }
    fetStories();
  }

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
          setParticipant(data);
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
      <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
          <p>"Projects"</p>
      </blockquote>

        <ItemList items={participant} rowSelectedHandler={function (t: any): void {
          getStories(t);
        }} />
        {/* <div className='flex-1 h-max overflow-y-auto'>
        {
          stories.map((user) => <StoryCard  item={user} callBack={(story: Story)=>{
            console.log('story', story);
          }}></StoryCard>)
          
          }
          </div> */}

      </div>
      </>
  )
}

export default page