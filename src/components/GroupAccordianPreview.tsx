'use client'
import { Accordion } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import QuestionRenderer from './question'
import { Button } from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { start_audit } from '@/redux/slices/auditSlice'
import PreviewModal from './PreviewModal'
import QuestionListRenderer from './questionlist'
import { RootState } from '@/app/store'

type Props = {
  data: any
,}

const GroupAccordianPreview = (props: Props) => {


  const all_answers = useSelector((state: RootState)=> state.audit.current_audit?.answers)

  const dispatch = useDispatch();
  
  //  useEffect(() => {
  //       // if (audit_id) {
  //       //     dispatch(start_audit({audit_id}));
  //       //  }
  //   },[audit_id]);
  

    return (
      <div className='m-5  bg-gray-800 '>
        <div className='flex-1'>
         <div className='h-full justify-center '>
            {
              props?.data.groups.map((selectedGroup:any) => (
                <>
                  <h2 className=' mt-10 m-5 pt-10 font-bold border-b-2  p-5 '>{selectedGroup.title}</h2>
                  <QuestionListRenderer questionData={selectedGroup?.questions} title={selectedGroup.title} all_answers={all_answers} ></QuestionListRenderer>
                </>
              )) 
            }
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
      </div>
  )
}

export default GroupAccordianPreview;