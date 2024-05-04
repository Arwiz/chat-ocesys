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
import { unstable_cache } from 'next/cache';
import { callPaperPaginations } from '@/lib/api.paper';
import { OrganizationContextProvider } from '@/context/OrganizationContextProvider';



const Page = async ({ params }: any) => {

    const org_id = params.org_id;
    const data = await callPaperPaginations(params.org_id , 1,10);
    const onClickHandler = (row: any) => {
      console.log(" i am called", row)
      redirect('/dashboard/organizations/design/' + row._id)
    }
  
    

  return (<div className=" bg-custom-dark">     
    <div className=' flex justify-between'>
      
          <HeaderRow />
            <OrganizationContextProvider orgnization_id={ org_id}>
              <AddAuditComponent />
           </OrganizationContextProvider>
          </div>
          <span className=' font-bold'> Template </span>
        <PaperList data={data}></PaperList>
    </div>)
};

export default Page;
