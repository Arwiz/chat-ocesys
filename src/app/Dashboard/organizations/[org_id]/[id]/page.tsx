import React from 'react';
import Link from 'next/link';
import { Accordion, Button } from 'flowbite-react';
import Question from '@/components/question';
import QuestionRenderer from '@/components/question';
import QuestionListRenderer from '@/components/questionlist';
import GroupAccordian from '@/components/GroupAccordian';
import { SERVER_API_URL } from '@/utils/fetch-data';

async function getData(Id: string) {

  const res = await fetch(`${SERVER_API_URL}/papers/${Id}`,  { cache: 'no-store' })
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
 
  return <div className="flex-1">
    <GroupAccordian data={data}></GroupAccordian>
  </div>
};

export default page;
