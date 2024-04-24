import { SERVER_API_URL } from '@/utils/fetch-data';
import Link from 'next/link';
import React from 'react';

async function getData(org_id: string) {
  const res = await fetch(`${SERVER_API_URL}/organizations/${org_id}`, { cache: 'no-store' })
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

    const data = await getData(params.org_id);
    const callBack = (id: string) => {
        console.log(" i am called", id)
    }
 

    return (<div className=" min-h-screen min-w-full">
        <h2 className=' m-10 p-5'>Audit Templates</h2> 
        <div className='flex'>
            {
                data?.audits?.map((ob: any, index: number) => (
                    <div
                        key={index}
                        // className="min-w-80 m-5 p-5 bg-custom-appgreeen items-center justify-center rounded-lg border-yellow-100 border-2 hover:bg-yellow-300"
                        className="flex w-60 min-h-60 bg-custom-appgreeen sm:h-20 md:h-10 items-center justify-center rounded-lg ml-10 mr-10 mt-2 mb-2 shadow-md transition-transform text-black transform hover:scale-105  border-yellow-100 border-2 hover:bg-custom-purple hover:text-white ]"
                    >
                        <Link href={`/dashboard/organizations/${params.org_id}/${ob._id}`}>
                            {ob.title}
                        </Link>
                    </div>
                ))
            }
        </div>

    </div>)
};

export default page;
