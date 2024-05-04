import { Button, Card } from 'flowbite-react'
import React from 'react'
import { QuestionDesign, QuestionDesignPreview } from './QuestionDesign'
import { HeaderRow } from '@/atoms/HeaderRow'
import { HeadingDesignNormal } from '@/atoms/Heading'
import { AddQuestionComponent } from './AddQuestionModal'
import { Question } from '@/types/questions'
import { usePaperContext } from '@/context/PaperContextProvider'
import { KeyVal } from '@/atoms/KeyVal'
import { Group } from '@/types/group'

type Props = {
    data: Group
}

export const GroupDesign = ({ data }: Props) => {
    // const setGroupId = () =>
    
    
  return (
      <div className=''>
          <div className='mx-5py-5'>
              <KeyVal title='' value={data.title} />
            </div>
          <div className='mx-5 py-5'>
              {
                      data?.questions?.map((ques_data: any) => <QuestionDesignPreview key={ques_data._id} question={ques_data} onSave={() => {
                      console.log('sdfsfds')
                  }} />)
              }
                  <div />
                  <div className=' flex justify-end'>
                    <div className=' flex justify-around my-5'>
                      <AddQuestionComponent data={data}>Add Question</AddQuestionComponent>
                      <AddQuestionComponent data={data}>Upload Questions</AddQuestionComponent>
                    </div>
                </div>
              </div>
      </div>
  )
}