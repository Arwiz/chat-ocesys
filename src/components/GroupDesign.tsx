import { Button, Card } from 'flowbite-react'
import React from 'react'
import { QuestionDesign, QuestionDesignPreview } from './QuestionDesign'
import { HeaderRow } from '@/atoms/HeaderRow'
import { HeadingDesignNormal } from '@/atoms/Heading'
import { AddQuestionComponent } from './AddQuestionModal'
import { Question } from '@/types/questions'

type Props = {
    data: any
}

export const GroupDesign = ({data}: Props) => {
  return (
      <div className=' bg-slate-500 my-10'>
          <Card>
          <HeadingDesignNormal>Group Design</HeadingDesignNormal>
          <div>
              {
                      data?.questions?.map((ques_data: any) => <QuestionDesignPreview key={ques_data._id} question={ques_data} onSave={() => {
                      console.log('sdfsfds')
                  }} />)
              }
                  <div />
                  <div className=' flex justify-end'>
                    <div className=' flex w-80 justify-around my-5'>
                        <AddQuestionComponent></AddQuestionComponent>
                        <Button> Upload Question 1</Button>
                    </div>
                </div>
              </div>
              </Card>
      </div>
  )
}