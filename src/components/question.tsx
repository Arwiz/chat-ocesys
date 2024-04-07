"use client"
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import CountdownTimer from './countdown';

interface Option {
  _id: string;
  title: string;
}

interface Question {
  _id: string;
  title: string;
  question_type: string;
  options: Option[];
}

interface Props {
    questionData: Question[];
    duration: number
}

const QuestionRenderer: React.FC<Props> = ({ questionData, duration }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    
    const router = useRouter();


  const handleOptionSelect = (optionId: string) => {
    const index = selectedOptions.indexOf(optionId);
    if (index === -1) {
      setSelectedOptions([...selectedOptions, optionId]);
    } else {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questionData.length - 1));
    setSelectedOptions([]);
  };

  const handleBack = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setSelectedOptions([]);
  };
    
    
 const handleClose = () => {
     router.back();
  };
    

  const currentQuestion = questionData[currentQuestionIndex];

  return (
      <div className='m-10 justify-items-center bg-gray-800 p-5'>
        <div  className=' flex justify-end pr-2 pb-5'  onClick={handleClose} >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
            </svg>
        </div>
          
        <CountdownTimer initialTimeInMinutes={duration}></CountdownTimer>

          <h3>{currentQuestion.title}</h3>
      <ul className='justify-items-center bg-gray-800 p-10'>
        {currentQuestion.options.map((option) => (
          <li className='justify-items-center p-2 ' key={option._id}>
            <input
              type={currentQuestion.question_type === 'MULTI_SELECT' ? 'checkbox' : 'radio'}
              id={option._id}
              name={currentQuestion._id}
              checked={selectedOptions.includes(option._id)}
              onChange={() => handleOptionSelect(option._id)}
            />
            <label className='p-2' htmlFor={option._id}>{option.title}</label>
          </li>
        ))}
              </ul>
          <div className='flex justify-end'>
              <div  className='flex justify-between p-2'>
        <Button onClick={handleBack} disabled={currentQuestionIndex === 0}>
          Back
                  </Button>
                  </div>
                   <div  className='flex justify-between p-2'>
                    <Button onClick={handleNext} disabled={currentQuestionIndex === questionData.length - 1}>
                    Next
                    </Button>
          </div>
      </div>
    </div>
  );
};

export default QuestionRenderer;