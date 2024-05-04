"use client"
import { Paper } from '@/types/paper';
import { Question } from '@/types/questions';
import { Group } from 'next/dist/shared/lib/router/utils/route-regex';
import React, { createContext, useContext, useState } from 'react';
import { string } from 'zod';


type PaperContextType = {
    paperId?: string ,
    group_id?: string ,
    questions?: Question[],
    add_question?: (question: Question) => void,
}


const initialState = {
    paperId: undefined,
    group_id: undefined,
    questions: []
}


// Create a context for email validation
const PaperContext = createContext(initialState) ;

export const usePaperContext = (): PaperContextType => {
  const context = useContext(PaperContext);
  if (!context) {
    throw new Error('Paper context not available');
  }
  return context;
};

// Email validation provider component
export const PaperContextProvider = ({ children, paper_id }: { children: React.ReactNode, paper_id?: string}) => {

  const [paperId, setPaperId] = useState<string | undefined>(paper_id);

  const [groupId, setGroupId] = useState<string | undefined>();

  const [currentpaper, setCurrentPaper] = useState< Paper | undefined>();


  const [questions, setQuestions] = useState<Question[]>([]);


    const add_group = (question: Question) => {
        const allQuestions = [...questions, question];
        setQuestions(allQuestions);
      
        console.log('allQuestions: ', allQuestions);
    }
  
  const delete_group = (question: Question) => {
        const allQuestions = [...questions, question];
        setQuestions(allQuestions);
      
        console.log('allQuestions: ', allQuestions);
    }


    const add_question = (question: Question) => {
        const allQuestions = [...questions, question];
        setQuestions(allQuestions);      
        console.log('allQuestions: ', allQuestions);
    }
  
   const set_current_group = (group: Group[]) => { 
        const allQuestions = [...group.questions];
        setQuestions(allQuestions);
        setGroupId(group._id);
        console.log('allQuestions set_creent_group: ', groupId , allQuestions);
    }

  return (
    <PaperContext.Provider  value={{ paperId, groupId, setQuestions, set_current_group,  questions, add_question }}>
      {children}
    </PaperContext.Provider>
  );
};