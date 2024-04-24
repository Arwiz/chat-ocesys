import React from 'react'
import { AuditTableComponent } from '@/components/AuditTable'
import { BreadcrumbComponent } from '@/atoms/Breadcrubm'
import { SERVER_API_URL } from '@/utils/fetch-data'

type Props = {}

async function getData(_id?: string) {

  const url = _id ? `${SERVER_API_URL}/audits/${_id}` : `${SERVER_API_URL}/audits`
  const res =  await fetch(url, { cache: 'no-store' })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const bcdata = [{
  title: 'Home',
  value: '/dashboard'
},
  {
  title: 'Audit',
  value: '/dashboard/audit'
}]
const page = async ({ params }: any) => {

  const data = await getData();
  console.log('data111', data);

  return (
    <>
      <BreadcrumbComponent data ={ bcdata } />
      <AuditTableComponent cols={['paper_id', 'user_id' , 'SubMission Date' ]} rows={data}></AuditTableComponent>
    </>
  )
}

export default page