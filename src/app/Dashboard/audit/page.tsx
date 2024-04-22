import React from 'react'
import { AuditTableComponent } from '@/components/AuditTable'

type Props = {}

async function getData(_id?: string) {

  const url = _id ? `http://localhost:3003/audits/${_id}` : `http://localhost:3003/audits`
  const res =  await fetch(url, { cache: 'no-store' })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const page = async ({ params }: any) => {

  const data = await getData();
  console.log('data111', data);

  return (
    <>
      <div>Audit page234</div>
      <AuditTableComponent cols={['paper_id', 'user_id' , 'SubMission Date' ]} rows={data}></AuditTableComponent>
    </>
  )
}

export default page