"use client";
import StoryCard, { Story } from '@/components/storycard'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { socket } from '@/lib/socket';

import { Button, Card, Avatar, Dropdown } from 'flowbite-react';
import Image from 'next/image';
import { toast } from 'react-toastify';

type Props = {
  story: Story
}

const page = (props: any) => {
  const router = useRouter()
  const session = useSession();

  const [stories, setStories] = useState<Story[]>([])
  const [selectedStory, setSelectedStory] = useState<Story|null>(null)


  const searchParams = useSearchParams()
  console.log('props 123', searchParams.get('project_id'));
  const project_id = searchParams.get('project_id');
  const [pokerNumbers, setPokerNumbers] = React.useState([
    1, 2, 3, 5, 8, 13, 21, 34, 55,
  ]);


  const [vote, setVote] = React.useState<number | undefined>(undefined);
  const [message, setMessage] = React.useState<string | undefined>(undefined);
  const [participant, setParticipant] = React.useState<any[] | undefined>(undefined);
  

  useEffect(() => {
    if (project_id) {
      getStories(project_id);
    }
  }, [project_id]);

  

  const joinRoom = async() => {
    try {
      const token = session.data?.user?.token;
        const headers = {
          Authorization: token,
          'Content-Type': 'application/json',
        };
      
      axios
        .post(
          'http://localhost:3000/api/poker/roomjoin',
          {
            story_id: selectedStory?._id,
          },
          {headers},
        )
        .then((response: any) => {
          // Handle the response data here
          console.log('REsponse of Sevove', response.data);
        })
        .catch(error => {
          // Handle any errors here
          console.log(error);
        });
      // setData(result);
      // If user register successfully then redirect login page
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const leaveRoom = () => {
    try {
      if (!selectedStory?._id) {
        
      }
      const token = session.data?.user?.token;
      const headers = {
        Authorization: token,
        'Content-Type': 'application/json',
      };

      axios
        .post(
          'http://localhost:3000/api/poker/roomleave',
          {
            story_id: selectedStory?._id,
          },
          {headers},
        )
        .then((response: any) => {
          // Handle the response data here
          console.log(response.data);
        })
        .catch(error => {
          // Handle any errors here
          console.log(error);
        });
      // setData(result);
      // If user register successfully then redirect login page
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    console.log(session?.data?.user?.token);
    const token = session.data?.user?.token;
    console.log('Connected to server', socket);
    if (token) {
      if (socket && selectedStory?._id) {
        if (socket.connected) {
          saveMyPoker(0);
          socket.emit('join.poker.room.client', `${selectedStory?._id}`);
        }
        socket.on('connect', () => {
          console.log('Connected to server 1234');
          socket.emit('join.poker.room.client', `${selectedStory?._id}`);
        });
    
        socket.on('disconnect', () => {
          console.log('Disconnected from server');
        });
    
        socket.on('poker.room.join.new.user', (msg) => {
          console.log('New message:******************** Receiev', msg);
          const data = msg?.voting;
          toast.success('New User Added');
        });
    
        socket.on('poker.room.leave', (msg) => {
          console.log('room.leaved', msg);
        });
        
        socket.on('poker.room.updated', (msg) => {
          console.log('pokerroomupdate', msg);
          const data = msg?.voting;
          if (data && msg._id === selectedStory._id) {
            const array: any[] = Object.values(data);
            setParticipant(array);
          }
        });
      
      }
    }
    return () => {
      if (socket.connected) {
        socket.emit('leave.poker.room.client', `${project_id}`);
      }
        socket?.off()
        socket?.off()
        socket?.off()
        socket?.off()
      }

}, [session, selectedStory?._id]);

const saveMyPoker = (poker: number) => {
  try {
    const token = session.data?.user?.token;
    const headers = {
      Authorization: token,
      'Content-Type': 'application/json',
    };

    axios
      .post(
        'http://localhost:3000/api/poker',
        {
          story_id: selectedStory?._id,
          poker: poker,
        },
        {headers},
      )
      .then((response: any) => {
        // Handle the response data here
        console.log(response.data);
        //setVote(poker);
      })
      .catch(error => {
        // Handle any errors here
        console.log(error);
      });
    // setData(result);
    // If user register successfully then redirect login page
  } catch (error) {
    console.log(error);
  } finally {
  }
};
  
const getStories = (projectId: string) => {
  async function fetStories() {

    console.log('projectId', projectId);
    try {

      const token = session.data?.user?.token;
      const headers = {
        Authorization: token,
        'Content-Type': 'application/json',
      };
      if (token) {
        const response = await fetch(`http://localhost:3000/api/stories/${projectId}`, {
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

 
  return (<>
    <div>
    
      <h6 className="text-lg font-bold dark:text-white text-center mt-10">PokerRoom</h6>
      <p className="m-10 text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
  

      <div className='items-center justify-center ' >
         <div className='flex justify-evenly'>
          <p className="mr-10 text-gray-500 dark:text-gray-400">Story for Poker</p>
          <Dropdown label={selectedStory?.name || " Select Stories"} dismissOnClick={true}>
            {
              stories.map((story) => <Dropdown.Item onClick={()=> setSelectedStory(story)}>{story?.name}</Dropdown.Item>)
            }
          </Dropdown>
        </div> 
        {selectedStory && <div className='flex mt-10 mb-4'>
          {
            participant?.map((user) =>
              <div className="flex-1 flex-wrap gap-2">
                
                <Avatar
                  alt={user.email}
                  img="/images/people/default.jpeg"
                  rounded
                />
                <p className="text-2xl font-semibold text-gray-900 dark:text-white text-center m-2">{(user?.vote === 0) ? 'N/A' : user?.vote}</p>
                <p className="text-sx font-semibold text-gray-900 dark:text-white text-center">{ user?.email}</p>
              </div>)
            
          }
        </div>
        }
        <div className='flex justify-center items-center'>
        {selectedStory && <Card className='md:h-1/2 md:w-1/2'>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white text-center">{selectedStory?.name}</p>
          <div className='flex-1 items-center justify-center flex-wrap  grid grid-cols-3 grid-flow-row'>
            {
              selectedStory && pokerNumbers.map((num) =>
                <Card onClick={() => saveMyPoker(num)} className="m-5 p-2 flex items-center justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                  {num}
                </Card>
              )}
          </div>
        </Card>
        }
        </div>
      </div>
      </div>
  </>
  )
}

export default page