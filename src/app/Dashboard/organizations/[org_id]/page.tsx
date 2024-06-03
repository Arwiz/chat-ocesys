import { SERVER_API_URL } from '@/utils/fetch-data';
import Link from 'next/link';
import React from 'react';

import { CommonTable } from '@/components/CommonTable';
import { KeyVal } from '@/components/keyval';
import { Heading500 } from '@/atoms/Heading';
import { AddButton } from '@/atoms/AddButton';
import { HeaderRow } from '@/atoms/HeaderRow';
import { AddAuditComponent } from '@/components/AddAuditModal';
import { redirect, useSearchParams } from 'next/navigation';
import { PaperList } from '@/components/PaperList';
import { unstable_cache } from 'next/cache';
import { callPaperPaginations } from '@/lib/api.paper';
import { OrganizationContextProvider } from '@/context/OrganizationContextProvider';
import { PaginationComponent } from '@/components/Pagination';



const Page = async ({ params, searchParams }: any) => {

    const org_id = params.org_id;
  let data = await callPaperPaginations(params.org_id, searchParams.page || 0, searchParams.limit || 10);
  
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
      <PaperList data={data} pageChangeHandler={callPaperPaginations}></PaperList>
    <PaginationComponent totalPages={data.totalItems}></PaginationComponent>


    </div>)
};

export default Page;
