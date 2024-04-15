"use client"
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import CountdownTimer from './countdown';
import { Question } from '../types/questions';
import { QuestionType } from '@/types/question_type_enum';

interface Props {
    questionData: Question[];
    duration: number;
}

interface Answer {
    question_id: string;
    selected_options?: string[];
    answer_text?: string;
}

const QuestionListRenderer: React.FC<Props> = ({ questionData }) => {
    const [selectedOptions, setSelectedOptions] = useState<{ [questionId: string]: string[] }>({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [allQuestionsAttempted, setAllQuestionsAttempted] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
      
    }, [selectedOptions, questionData]);

    const handleOptionSelect = (optionId: string) => {
    };

    const handleNext = () => {
        setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questionData.length - 1));
    };

    const handleBack = () => {
        setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleClose = () => {
        router.back();
    };

    const saveData = () => {
        validateError()
        console.log('save ',selectedOptions);
    }

    const saveDraft = () => {
        validateError()
        console.log('save draft',selectedOptions);
    }



    const validateError = () => {
        if (!allQuestionsAttempted) {
            setShowError(true);
        } else {
            // Logic to handle saving or drafting
        }
    };

    const currentQuestion = questionData[currentQuestionIndex];
    const currentSelectedOptions = selectedOptions[currentQuestion._id] || [];
    

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
                                checked={currentSelectedOptions.includes(option._id)}
                                onChange={() => handleOptionSelect(option._id)}
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