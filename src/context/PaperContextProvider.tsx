"use client"
import { Paper } from '@/types/paper';
import { Question } from '@/types/questions';
import { Group } from '@/types/group';
import React, { createContext, useContext, useState } from 'react';
import { string } from 'zod';


interface PaperContextType  {
      currentPaper?: Paper,  
      currentGroup?: Group, 
      set_current_group?: (group: Group) => void,
      add_question?: (question: Question) => void,
      update_question?: (question: Question) => void,
      delete_question?: (question: Question) => void,
      add_group?: (group: Group) => void,
      update_group?: (group: Group) => void,
      delete_group?: (group: Group) => void,
}


const initialState = {
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
export const PaperContextProvider = ({ children, initPaper }: { children: React.ReactNode, initPaper?: Paper}) => {

  const [currentPaper, setCurrentPaper] = useState<Paper | undefined>(initPaper);
  const [currentGroup, setCurrentGroup] = useState<Group | undefined>();
  const [questions, setQuestions] = useState<Question[]>([]);
  


    const add_group = (question: Question) => {
        const allQuestions = [...questions, question];
        setQuestions(allQuestions);
        console.log('allQuestions: ', allQuestions);
    }
  
    const update_group = (question: Question) => {
     // todo: update group
    
    }
  
  const delete_group = (question: Question) => {
       // todo: delete group
    }


    const add_question = (question: Question) => {
        const allQuestions = [...questions, question];
        setQuestions(allQuestions);      
        console.log('allQuestions: ', allQuestions);
    }
  
    const update_question = (question: Question) => {
        // todo: update question 
    }
  
    const delete_question = (question: Question) => {
     // todo: delete question 
    }
  
  
  const set_current_group = (group: Group) => { 
        const allQuestions = [...group.questions];
        setQuestions(allQuestions);
        setCurrentGroup(group);
    }

  return (
    <PaperContext.Provider value={{
      currentPaper,
      currentGroup,
      setCurrentGroup,
      set_current_group,
      add_question,
      update_question,
      delete_question,
      add_group,
      update_group,
      delete_group,
    }}>
      {children}
    </PaperContext.Provider>
  );
};