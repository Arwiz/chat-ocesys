import Link from 'next/link';
import React from 'react';

async function getData() {
  const res = await fetch('http://localhost:3003/papers', { cache: 'no-store' })
  // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    console.log(res);
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

type Props = {};

const page = async (props: Props) => {

    const data = await getData()

    const callBack = (id: string) => {
        console.log(" i am called", id)
    }
 

    return (<div className=" min-h-screen min-w-full">
        {/* <div>Papers</div> */}
        {data.map((ob, index) => (
            <div
                key={index}
                className="min-w-80 h-32 bg-gray-800 flex items-center justify-center rounded-lg ml-10 mr-10 mt-2 mb-2 shadow-md transition-transform transform hover:scale-105 ]"
            >
                <Link href={`/dashboard/products/${ob._id}`}>
                    {ob.title}
                </Link>
            </div>
        ))}
        {/* <div>Papers</div> */}
    </div>)
};

export default page;
