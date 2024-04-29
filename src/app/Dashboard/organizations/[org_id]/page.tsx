import { SERVER_API_URL } from '@/utils/fetch-data';
import Link from 'next/link';
import React from 'react';

import { CommonTable } from '@/components/CommonTable';
import { KeyVal } from '@/components/keyval';
import { Heading500 } from '@/atoms/Heading';
import { AddButton } from '@/atoms/AddButton';
import { HeaderRow } from '@/atoms/HeaderRow';
import { AddAuditComponent } from '@/components/AddAuditModal';
import { redirect } from 'next/navigation';
import { PaperList } from '@/components/PaperList';

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

const Page = async ({ params }: any) => {

    const org_id = params.org_id;
    const data = await getData(params.org_id);
    const onClickHandler = (row: any) => {
      console.log(" i am called", row)
      redirect('/dashboard/organizations/design/' + row._id)
    }

  return (<div className=" bg-custom-dark">
    <HeaderRow />
    <PaperList data={data}></PaperList>
    </div>)
};

export default Page;
