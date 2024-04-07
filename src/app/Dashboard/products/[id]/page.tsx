import React from 'react';
import Link from 'next/link';
import { Button } from 'flowbite-react';
import Question from '@/components/question';

async function getData(Id: string) {

  const res = await fetch(`http://localhost:3003/papers/${Id}`,  { cache: 'no-store' })
  // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    console.log(res);
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

type ParamProps = {
  id: String,
};

const page = async ({ params }: any) => {
  console.log('params', params);
  const data = await getData(params.id);
  console.log('....data', data);
 
  return <div className=" min-h-screen min-w-full">
      <h1>{data?.title}</h1>
      <Question questionData={data?.questions} duration={data.duration}></Question>
  </div>
};

export default page;
