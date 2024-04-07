"use client"
import React from 'react';

type Item = {
  title: string;
  data: any[];
  callback: (id: string) => void;
}
const HorizontalListPage = (props: Item) => {
  const data = props.data || Array.from({ length: 100 }); 
  

  const callme  = (id: string) => {
    props.callback(id);

  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">{props.title}</h1>
      <div className="flex overflow-x-auto space-x-4">
        {data.map((ob, index) => (
          <div
            key={index}
            className="min-w-80 h-32 bg-gray-800 flex items-center justify-center rounded-lg"
            // onClick={() => {
            //   // callME(ob?._id)
            //   console.log(ob?._id);
            // }}
          >
            {ob.title}
                      <button onClick={()=>callme(ob.id)}>Delete</button>

{}          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalListPage;