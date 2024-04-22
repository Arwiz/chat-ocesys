import Link from 'next/link';
import React from 'react';

async function getData(org_id: string) {
  const res = await fetch(`http://localhost:3003/organizations/${org_id}`, { cache: 'no-store' })
  // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    console.log(res);
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

const page = async ({ params }: any) => {

    console.log("I am called with params", params.org_id);
    const data = await getData(params.org_id);
    const callBack = (id: string) => {
        console.log(" i am called", id)
    }
 

    return (<div className=" min-h-screen min-w-full">
        <div>Papers</div> 
        {data?.audits?.map((ob, index) => (
            <div
                key={index}
                className="sm:bg-blue-200 md:bg-green-200 md:min-w-80 sm:h-20 md:h-10 md:flex items-center justify-center rounded-lg ml-10 mr-10 mt-2 mb-2 shadow-md transition-transform transform hover:scale-105 ]"
            >
                <Link href={`/dashboard/products/${params.org_id}/${ob._id}`}>
                    {ob.title}
                </Link>
            </div>
        ))}
    </div>)
};

export default page;
