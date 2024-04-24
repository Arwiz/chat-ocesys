import React from 'react'
import { Accordion } from "flowbite-react";
import GroupAccordian from '@/components/GroupAccordian';
import GroupAccordianPreview from '@/components/GroupAccordianPreview';
import AuditDetail from '@/components/AuditDetail';
import { BreadcrumbComponent } from '@/atoms/Breadcrubm';
import { SERVER_API_URL } from '@/utils/fetch-data';


type Props = {
    params: any
}



async function getData(Id: string) {

  const res = await fetch(`${SERVER_API_URL}/audits/${Id}`, { cache: 'no-store' }); 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const bcdata = [
  {
  title: 'Home',
  value: '/dashboard',
  },
  {
  title: 'Audit',
  value: '/dashboard/audit',
  },
  {
  title: 'Audit Detail',
  value: undefined,
}
]

const OrganizationAudit = async ({ params }: any) => {
  const data = await getData(params.audit_id);
  return (
    <div>
       <BreadcrumbComponent data ={bcdata } />
      <AuditDetail data={data.paper_id} title={'Test ME '} all_answers={data.answers}></AuditDetail>  
    </div>
  )
}

export default OrganizationAudit