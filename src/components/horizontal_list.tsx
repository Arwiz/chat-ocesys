"use client"
import { Orgnization } from '@/interface/Organization';
import React from 'react';
import { Button } from './Button';
import { useRouter } from 'next/navigation';



const HorizontalListPage = (props: any) => {
  const router = useRouter();
  console.log("HorizontalListPage", props);
  const data: Orgnization[] = props.data ||  []; 
  

  const callme  = (org: Orgnization) => {
    // props.callback(org.name, "i ma clalled  ");
    router.push(`dashboard/products/${org._id}`)
    
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">{props.title}</h1>
      <div className="flex overflow-x-auto space-x-4">
        {data.map((ob: Orgnization , index: number) => (
          <div
            key={index}
            className="min-w-80 m-5 p-5 bg-yellow-400 items-center justify-center rounded-lg border-yellow-100 border-2 hover:bg-yellow-300"
            onClick={() => {
              console.log(ob._id);
              callme(ob)
            }}
          >
            <h5 className='p-5 pl-10 pr-10'>
              {ob?.name}
              </h5>
           <Button title={ob?.name} handler={callme}/>
        </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalListPage;