import React from 'react'

type Props = {}
async function getData(token: string){
    const res = await fetch('https://web.ocesys.com/api/docs/PROJECT', {
        headers: { Authorization: token }
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
const Dashboard =  async (props: Props) => {
    


  return (
      <div>
          Dashboard
      </div>
  )
}

export default Dashboard