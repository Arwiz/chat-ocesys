'use client'
import { Accordion } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import QuestionRenderer from './question'
import { Button } from './Button'

type Props = {
    data: any
}

const GroupAccordian = (props: Props) => {

    const [selectedGroup, setSelectedGroup] = useState<any>(null);

    useEffect(() => {
        if (props?.data.groups?.length > 0) {
            setSelectedGroup(props?.data.groups[0]);
         }
    },[]);


    return (
      <div className='m-5  bg-gray-800 '>
        <div className='flex'>
      <div className='border-r border-gray-300 h-full '>
          {
            props?.data.groups.map((row:any) => (

                <div onClick={() => setSelectedGroup(row)}
                className={`border-r border-b border-gray-300 p-4 hover:bg-yellow-400 ${
                selectedGroup === row ? ' bg-yellow-400' : ''
              }`}>
                    <div>{row.title}</div>
                </div>
            )) 
          }
    </div>
       <div className='flex-1'>
         {(selectedGroup && <div className='flexflex-1 bg-gray-950 m-5'>
                <h2 className=' mt-10 m-5 pt-10 font-bold border-b-2  p-5 '>{selectedGroup.title}</h2>
                <QuestionRenderer questionData={selectedGroup?.questions} title={selectedGroup.title} ></QuestionRenderer>
            </div>
        )}
          </div>
        </div>
        <div className='flex justify-center items-center bg-slate-500 '>
           <Button title='Save' handler={() => {
            console.log('Submit called');
            }}></Button>
            
             <Button title='Draft' handler={() => {
            console.log('Draft called');
          }}></Button>
        </div>
        
    </div>
  )
}

export default GroupAccordian;