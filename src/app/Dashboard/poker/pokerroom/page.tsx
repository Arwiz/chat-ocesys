"use client";
import { Story } from '@/components/storycard'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import axios from 'axios';
import { socket } from '@/lib/socket';



import { Button, Card } from 'flowbite-react';
import Image from 'next/image';

type Props = {
  story: Story
}

const page = (props: any) => {
  const router = useRouter()
  const session = useSession();

  const searchParams = useSearchParams()
  console.log('props 123', searchParams.get('story'));
  const story_id = searchParams.get('story');
  const [pokerNumbers, setPokerNumbers] = React.useState([
    1, 2, 3, 5, 8, 13, 21, 34, 55,
  ]);


  const [vote, setVote] = React.useState<number | undefined>(undefined);
  const [message, setMessage] = React.useState<string | undefined>(undefined);
    const [participant, setParticipant] = React.useState<any[] | undefined>(undefined);

  

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
            story_id: story_id,
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
      
      const token = session.data?.user?.token;
      const headers = {
        Authorization: token,
        'Content-Type': 'application/json',
      };

      axios
        .post(
          'http://localhost:3000/api/poker/roomleave',
          {
            story_id: story_id,
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
      if (socket) {
        if (socket.connected) {
          socket.emit('join.poker.room.client', `${story_id}`);
        }
        socket.on('connect', () => {
          console.log('Connected to server 1234');
          socket.emit('join.poker.room.client', `${story_id}`);
        });
    
        socket.on('disconnect', () => {
          console.log('Disconnected from server');
        });
    
        socket.on('poker.room.join', (msg) => {
          console.log('New message:******************** Receiev', msg);
          const data = msg?.voting;
          if (data) {
            const array: any[] = Object.values(data);
            // console.log('New message:********************>>>>', array);
            setParticipant(array);
            // console.log('New message:********************>', array, participatns);
          }
        });
    
        socket.on('poker.room.leave', (msg) => {
          console.log('room.leaved', msg);
        });
        socket.on('pokerroomupdate', (msg) => {
          console.log('pokerroomupdate', msg);
        });
        
        socket.on('poker.room.updated', (msg) => {
          console.log('pokerroomupdate', msg);
          const data = msg?.voting;
          if (data) {
            const array: any[] = Object.values(data);
            // console.log('New message:********************>>>>', array);
            setParticipant(array);
            // console.log('New message:********************>', array, participatns);
          }
        });
      
      }
    }
    return () => {
      if (socket.connected) {
        socket.emit('leave.poker.room.client', `${story_id}`);
      }
        socket?.off()
        socket?.off()
        socket?.off()
        socket?.off()
      }

}, [session]);

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
          story_id: story_id,
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
 
  return (<>
    <div>
    
      <h6 className="text-lg font-bold dark:text-white text-center mt-10">PokerRoom</h6>
      <p className="m-10 text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
      <div className='flex '>
      {
          participant?.map((user) => <Card className='m-5 p-5 bg-green-600 flex items-center justify-center'>
              <blockquote>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white text-center">{user?.vote }</p>
    </blockquote>
          <figcaption className="flex items-center mt-6 space-x-3">
        {/* <Image className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" width={30} height={30}/> */}
        <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
            <cite className="pr-3 font-medium text-gray-900 dark:text-white">{user?.email}</cite>
            {/* <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CTO at Flowbite</cite> */}
        </div>
              </figcaption>
          </Card>)
      }
      </div>

    <div className='flex items-center justify-center m-10' >
    <Card className='md:h-1/2 md:w-1/2'>
    <div className='flex-1 items-center justify-center flex-wrap  grid grid-rows-3 grid-flow-col'>
      {
        pokerNumbers.map((num) => 
            <Card onClick={() => saveMyPoker(num)}  className="m-5 p-2 flex items-center justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            {num} 
            </Card>
          )}
         </div>
      </Card>
      </div>
      </div>
  </>
  )
}

export default page