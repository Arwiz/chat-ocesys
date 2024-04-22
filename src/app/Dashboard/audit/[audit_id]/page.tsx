import React from 'react'
import { Accordion } from "flowbite-react";
import GroupAccordian from '@/components/GroupAccordian';
import GroupAccordianPreview from '@/components/GroupAccordianPreview';
import AuditDetail from '@/components/AuditDetail';


type Props = {
    params: any
}



async function getData(Id: string) {
 console.log('...audit_id', Id)
console.log('res...>', `http://localhost:3003/audits/${Id}`);
 
  const res = await fetch(`http://localhost:3003/audits/${Id}`,  { cache: 'no-store' })
  // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    console.log('res...>', res);
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



const OrganizationAudit = async ({ params }: any) => {
 console.log('Audit...audit_id', params.audit_id)
  const data = await getData(params.audit_id);
  console.log('Audit...123', data)

  return (
    <div><>
      <AuditDetail data={data.paper_id} title={'Test ME '} all_answers={data.answers}></AuditDetail>
      
    </></div>
  )
}

export default OrganizationAudit