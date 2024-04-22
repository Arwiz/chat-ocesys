'use client'
import { Accordion } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import QuestionRenderer from './question'
import { Button } from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { AuditAnswerType, start_audit } from '@/redux/slices/auditSlice'
import PreviewModal from './PreviewModal'
import  { QuestionListRendererPreview } from './questionlist'
import { RootState } from '@/redux/store'
import { KeyVal } from '@/atoms/KeyVal'

type Props = {
  data: any,
  title: string,
  all_answers: AuditAnswerType
,}

const AuditDetail = (props: Props) => {

  const { data, all_answers  } = props;

  const dispatch = useDispatch();
  

    return (
      <div className='m-5  bg-gray-800 '>
        <div className='flex-1'>
         <div className='h-full justify-center '>
            {
              props?.data.groups.map((selectedGroup:any) => (
                <>
                  <div className=' justify-center mt-5 m-5 py-10 font-bold border-b-2  p-5 '>
                    <h2 className=' justify-center mt-5 font-bold px-5 '>{selectedGroup.title}</h2>
                    <div className='flex justify-between my-2'>
                      <KeyVal title={'Created At'} value={data.created_at} />
                      <KeyVal title={'Created By'} value={data.client_id} />
                      </div>
                    </div>
                  <QuestionListRendererPreview isDisable={true} questionData={selectedGroup?.questions} title={selectedGroup.title} all_answers={all_answers} ></QuestionListRendererPreview>
                </>
              )) 
            }
          </div>   
        </div>
        </div>
  )
}

export default AuditDetail;

