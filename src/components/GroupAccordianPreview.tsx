'use client'
import { Accordion } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import QuestionRenderer from './question'
import { Button } from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { AuditAnswerType, start_audit } from '@/redux/slices/auditSlice'
import PreviewModal from './PreviewModal'
import QuestionListRenderer from './questionlist'
import { RootState } from '@/redux/store'

type Props = {
  data: any,
  title: string,
  all_answers: AuditAnswerType
,}

const GroupAccordianPreview = (props: Props) => {

  const { data, all_answers  } = props;

  const dispatch = useDispatch();
  

  const save_answer = async (  paper_id: string,
  user_id: string,
  status: string,
    answers: any) => {
    try {
      // Make the API call to save data
      const response = await fetch('http://localhost:3003/questions/answers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paper_id,
          user_id,
          status,
          answers
        }), // Send your form data in the request body
      });
      if (response.ok) {
        // Handle successful save
        console.log('Data saved successfully', response);
      } else {
        // Handle save failure
        console.error('Failed to save data:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
 } 



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
            
             <button onClick={() => {
              console.log('Draft called');

              console.log("all_answers", all_answers);
              save_answer(data._id, 'ARVIND', 'DRAFT', all_answers);
              
          }}>Draft</button>
            
        </div>
        </div>
      </div>
  )
}

export default GroupAccordianPreview;

