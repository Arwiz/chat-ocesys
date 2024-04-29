import { PaperDesigner } from '@/components/PaperDesigner'
import React from 'react'


import { SERVER_API_URL } from '@/utils/fetch-data';

async function getData(Id: string) {

  const res = await fetch(`${SERVER_API_URL}/papers/${Id}`, { cache: 'no-store' });
  
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
  console.log('....data', data);
 
  return (
      <div>
          <>Template Design</>
          <PaperDesigner data={data}>
              
          </PaperDesigner>
      </div>
  )
}

export default page