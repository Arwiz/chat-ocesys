import { Orgnization } from '@/interface/Organization';
import HorizontalListPage from '../../components/horizontal_list';
import React from 'react';

async function getData() {
  const res = await fetch('http://localhost:3003/organizations', { next: { revalidate: 3600 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


interface OrganizationProp {
  organizations: Orgnization[]
};


const Dashboard : React.FC<OrganizationProp> = async (props) => {

  const data = await getData();
  console.log("....props", props, data);
  // const handler = (orgnization: Orgnization) => { 
  //   console.log(JSON.stringify(props));
  // }
  return <div className="flex min-h-screen min-w-full justify-evenly">
    <HorizontalListPage title='Orgnizations' data={data} />
  </div>
};  

export default Dashboard;
