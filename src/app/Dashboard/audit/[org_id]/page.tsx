import React from 'react'
import { Accordion } from "flowbite-react";


type Props = {
    params: any
}



async function getData(Id: string) {

  const res = await fetch(`http://localhost:3003/organization/${Id}`,  { cache: 'no-store' })
  // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    console.log(res);
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



const OrganizationAudit = (props: Props) => {

  const data = await getData(props.params.org_id);
console.log('Organization', props)

  return (
    <div>[org_id]</div>
  )
}

export default OrganizationAudit