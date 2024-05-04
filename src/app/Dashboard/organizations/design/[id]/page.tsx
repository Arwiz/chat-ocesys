import { PaperDesigner } from '@/components/PaperDesigner'
import React from 'react'


import { SERVER_API_URL } from '@/utils/fetch-data';
import { PaperContextProvider } from '@/context/PaperContextProvider';
import { fetchWithToken } from '@/lib/util';
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Card } from 'flowbite-react';

async function getData(Id: string) {

  const session = getServerSession(authOptions)
  console.log('Getting', `${SERVER_API_URL}/api/papers/${Id}`);
  const res = await fetch(`${SERVER_API_URL}/api/papers/${Id}`);
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

type Props = {}

type ParamProps = {
  id: String,
};

const page = async ({ params }: any) => {
  console.log('params', params);
  const data = await getData(params.id);
  console.log('....data => ', data , data._id);
 
  return (
      <div>
       <PaperContextProvider initPaper={data}>
          <PaperDesigner data={data} />
        </PaperContextProvider>
      </div>
  )
}

export default page