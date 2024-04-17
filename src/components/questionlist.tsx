"use client"
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import CountdownTimer from './countdown';
import { Question } from '../types/questions';
import { QuestionType } from '@/types/question_type_enum';
import { AuditAnswerType } from '@/redux/slices/auditSlice';

interface Props {
    questionData: Question[];
    duration?: number;
    title?: string
    all_answers: AuditAnswerType
}

interface Answer {
    question_id: string;
    selected_options?: string[];
    answer_text?: string;
   
}

const QuestionListRenderer: React.FC<Props> = ({ questionData, title, all_answers }) => {

    const router = useRouter();    

    return (
        <div className='m-10 justify-items-center bg-gray-800 p-5'>
            {questionData.map(currentQuestion => <>                
                <h3>{currentQuestion.title}</h3>
                {/* Options */}
                <ul className='justify-items-center bg-gray-800 p-10'>
                    {currentQuestion.options.map((option) => (
                        <li className='justify-items-center p-2 ' key={option._id}>
                            <input
                                type={currentQuestion.question_type === 'MULTI_SELECT' ? 'checkbox' : 'radio'}
                                id={option._id}
                                name={currentQuestion._id}
                                checked={(currentQuestion?._id && option._id && all_answers  ) ? all_answers[currentQuestion?._id]?.answers?.includes(option._id) : false }
                                disabled={true}
                            />
                            <label className='p-2' htmlFor={option._id}>{option.title}</label>
                        </li>
                    ))}
                </ul>
            </>)}
        </div>
    );
};

export default QuestionListRenderer;