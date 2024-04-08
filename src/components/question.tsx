"use client"
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import CountdownTimer from './countdown';
import { Question } from './../types/questions';
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

const QuestionRenderer: React.FC<Props> = ({ questionData, duration }) => {
    const [selectedOptions, setSelectedOptions] = useState<{ [questionId: string]: string[] }>({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [allQuestionsAttempted, setAllQuestionsAttempted] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        // Check if all questions have been attempted
        const attempted = questionData.every(question =>
            question._id in selectedOptions &&
            (selectedOptions[question._id].length > 0 || selectedOptions[question._id].length === 0)
        );
        setAllQuestionsAttempted(attempted);
    }, [selectedOptions, questionData]);

    const handleOptionSelect = (optionId: string) => {
        setSelectedOptions((prevSelectedOptions) => {
            const questionId = questionData[currentQuestionIndex]._id;
            const prevOptions = prevSelectedOptions[questionId] || [];

            if (prevOptions.includes(optionId)) {
                // If option is already selected, remove it
                const updatedArray = prevOptions.filter(id => id !== optionId);
                if (updatedArray.length > 0) {
                    return { ...prevSelectedOptions, [questionId]: prevOptions.filter(id => id !== optionId) };    
                }
                const result = { ...prevSelectedOptions };
                delete result[questionId];
                return result;

                
            } else {
                if (questionData[currentQuestionIndex].question_type === QuestionType.OPTION) {
                    return { ...prevSelectedOptions, [questionId]: [ optionId] };
                }
                // Otherwise, add the option
                return { ...prevSelectedOptions, [questionId]: [...prevOptions, optionId] };
            }
        });
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
            <div className=' flex justify-end pr-2 pb-5' onClick={handleClose}>
                {/* Close icon */}
            </div>

            {/* Countdown Timer */}
            <CountdownTimer initialTimeInMinutes={duration}></CountdownTimer>

            {/* Current Question */}
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

            {/* Navigation Buttons */}
            <div className='flex justify-end'>
                <div className='flex justify-between p-2'>
                    <Button onClick={handleBack} disabled={currentQuestionIndex === 0}>
                        Back
                    </Button>
                </div>
                <div className='flex justify-between p-2'>
                    <Button onClick={handleNext} disabled={currentQuestionIndex === questionData.length - 1}>
                        Next
                    </Button>
                </div>
            </div>

            {/* Save and Draft Button */}
            {allQuestionsAttempted && (
               <div className=' flex justify-center'>
            {/* Save and Draft Button */}
            <div className='flex justify-center mt-4'>
                <Button onClick={saveData}>
                    Save and Draft
                </Button>
                </div>
               

             {/* Save and Draft Button */}
            <div className='flex justify-center mt-4'>
                <Button onClick={saveData}>
                     Draft
                </Button>
                </div>
                </div>
            )}

            

            {/* Error Message */}
            {showError && !allQuestionsAttempted && (
                <div className='text-red-500 mt-2'>
                    Please answer all questions before saving or drafting.
                </div>
            )}
        </div>
    );
};

export default QuestionRenderer;