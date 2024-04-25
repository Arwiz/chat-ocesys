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
    all_answers?: AuditAnswerType
    isDisable?:boolean;
}

interface Answer {
    question_id: string;
    selected_options?: string[];
    answer_text?: string;
}

const QuestionListRenderer: React.FC<Props> = ({ questionData, title, all_answers, isDisable }) => {

    const router = useRouter();    

    return (
        <div className='m-10 justify-items-center p-5' >
            {questionData.map(currentQuestion => <>                
                <h3>{currentQuestion.title}</h3>
                {/* Options */}
                <ul className='justify-items-center p-10' >
                    {
                        currentQuestion.options.map((option) => {
                        const isAnswered = (currentQuestion?._id && option._id && all_answers) ? all_answers[currentQuestion?._id]?.answers?.includes(option._id) : false
                        return <li className='justify-items-center p-2' key={option._id}>
                            <input
                                type={currentQuestion.question_type === 'MULTI_SELECT' ? 'checkbox' : 'radio'}
                                id={option._id}
                                name={currentQuestion._id}
                                checked={isAnswered}
                                disabled={true}
                            />
                            <label className='p-2' htmlFor={option._id}>{option.title}</label>
                        </li>
                    }
                    )}
                </ul>
            </>)}
        </div>
    );
};


export const QuestionListRendererPreview: React.FC<Props> = ({ questionData, title, all_answers, isDisable }) => {

    const router = useRouter();    

    return (
        <div className={` justify-items-center p-5`} >
            {questionData.map(currentQuestion => <div key={currentQuestion._id}  className='justify-items-center m-2 py-5 px-10 bg-slate-600 rounded' >                
                <h3 className='text-gray-400'>{currentQuestion.title}</h3>
                {/* Options */}
                <ul className='justify-items-center py-5' >
                    {
                        currentQuestion.options.map((option) => {
                        const isAnswered = (currentQuestion?._id && option._id && all_answers) ? all_answers[currentQuestion?._id]?.answers?.includes(option._id) : false
                            return <li className={`justify-items-center rounded p-2 ${isAnswered ? ' bg-yellow-300' : ''}`} key={option._id}>
                            <input
                                type={currentQuestion.question_type === 'MULTI_SELECT' ? 'checkbox' : 'radio'}
                                id={option._id}
                                name={currentQuestion._id}
                                checked={isAnswered}
                                disabled={true}
                            />
                            <label className='p-2 text-gray-400' htmlFor={option._id}>{option.title}</label>
                        </li>
                    }
                    )}
                </ul>
            </div>)}
        </div>
    );
};

export default QuestionListRenderer;