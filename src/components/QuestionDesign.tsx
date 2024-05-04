import { HeadingDesignNormal } from '@/atoms/Heading';
import { QuestionType } from '@/types/question_type_enum';
import { Button, Card, Dropdown, Label, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Controller, Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { HiCog, HiCurrencyDollar, HiLockClosed, HiLogout, HiViewGrid, HiX } from 'react-icons/hi';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { usePaperContext } from '@/context/PaperContextProvider';
import { Question } from '@/types/questions';



interface Props {
  question?: Question;
  onSave: (updatedQuestion: Question) => void;
}




export const QuestionDesignPreview = ({ question }: Props) => {
    
    return (<div className='m-2'><Card>
      
      <HeadingDesignNormal>Question Design</HeadingDesignNormal>
            <div>
                <Label>Question</Label>
                <Label>{question.title}</Label>
          <div />
          {
                question?.options.map((opt: any) =>
                    <div>
                        <li>{opt.title}</li>
                    </div>)
          }
           </div>
    </Card>
        </div>
  )
}

 const initialQuestion = {
        title: '',
        options: [],
        uploads: false,
        remarks: false,
        category: '',
        sub_category: [],
        question_type: '',
        question_status: '',
    };

export const QuestionDesign: React.FC<Props> = ({ question, onSave }: Props) => {

     const { add_question } = usePaperContext();
   
    const questionsSchema = z.object({
        title: z.string().min(3, { message: 'Title is required' }),
        options: z.array(z.object({
            title: z.string().min(1, { message: 'Option is required' }),
            serialNumber: z.number().optional(),
        })),
        uploads: z.boolean(),
        remarks: z.boolean(),
        category:  z.string().optional(),
        sub_category:  z.array(z.string()).optional(),
        question_type: z.nativeEnum(QuestionType),
        question_status:  z.string(),
     });

    const { register, handleSubmit, setValue, getValues,  formState: { errors, isLoading }, } = useForm<Question>({
        defaultValues: initialQuestion,
        resolver: zodResolver(questionsSchema) 
    });
    
    const [options, setOptions] = useState<{ title: string }[]>([]);
    const [subCategories, setSubCategories] = useState<string[]>([]);
    const [subCategory, setSubCategory] = useState<string|null>(null);

    const [optionTitle, setOptionTitle] = useState('');

    


    const handleAddOptiont = (e) => {
        e.preventDefault();
        if (!optionTitle.trim()) return;
        const newOption = {
            title: optionTitle,
        };
        setOptions([...options, newOption]);
        setOptionTitle('');
    };

       const handleAddSubCategory = (e) => {
        e.preventDefault();
           if (!subCategory?.trim()) return;
           if (subCategory) {
            setSubCategories([...subCategories, subCategory]);
            setSubCategory(null);               
           }
            setSubCategory('');    
    };
    
    useEffect(() => {
        setValue('options', options);
    }, [options]);

      useEffect(() => {
        setValue('sub_category', subCategories);
    }, [subCategories]);

    // If initial question changes, update the form values
    React.useEffect(() => {
        if (initialQuestion) {
            Object.entries(initialQuestion).forEach(([key, value]) => {
                setValue(key as keyof Question, value);
            });
        }
    }, [initialQuestion, setValue]);

    return (
        <Card className=' h-full'>
            <form className='flex-1 min-h-96' onSubmit={handleSubmit((question: Question) => {
                console.log('question...', question);
                onSave(question)  
                console.log('question...2', question);
            })}>
                <div className='flex flex-col  divide-y divide-solid '>
                    <label className='flex p-5'>
                        <span className='min-w-60'>Title:</span>
                        <div>
                        <input className='flex-1 peer-invalid rounded-md text-gray-800' type="text" {...register('title')} />
                            {errors?.title && <p className="mt-2 peer-invalid:visible text-pink-600 text-sm">
                                {errors.title.message}</p>}
                        </div>
                    </label>
                   
                    <label className='flex p-5'>
                        <span className='min-w-60'>Options:</span>
                         <div className=' m-2'>
                                <div>
                                    <input
                                        className=' text-gray-800'
                                        type="text"
                                        placeholder="Enter option title"
                                        value={optionTitle}
                                        onChange={(e) => setOptionTitle(e.target.value)}
                                    />
                                    <button className='mx-5 outline outline-custom-green rounded-2xl hover:outline-custom-purple p-2' type="submit" onClick={handleAddOptiont}>Add Option</button>
                                </div>
                            <div className=' m-2'>
                                <Card className="h-auto max-h-[400px] overflow-y-auto">
                             <div className="flex-1 flex-wrap max-w-80">
                                        
                            {options.map((optionText, index) => (
                                <div className='p-1' key={index}>
                                                <div className=' flex justify-between border-custom-blue border p-2 rounded-xl'> {optionText.title}
                                                        <div className='m-1' onClick={(e) => {
                                        setOptions(prevOptions => {
                                            return prevOptions.filter((opt) => opt.title !== optionText.title);
                                        });
                                        e.preventDefault();
                                    }}>
                                        <HiX className="h-4 w-4 hover:text-custom-red" />
                                        </div>
                                        </div>
                                </div>
                            ))}
                                </div>
                          </Card>
                         </div>
                        </div>
                    </label>
                    <label className='flex p-5'>
                        <span className='min-w-60 '>Remarks:</span>
                        <input type='checkbox' {...register('remarks')} />
      
                    </label>
                    <label className='flex p-5'>
                        <span className='min-w-60'>Uploads:</span>
                        <input  className=' text-gray-800' type='checkbox' {...register('uploads')} />
                    </label>
                    <label className='flex p-5'>
                        <span className='min-w-60'>Category:</span>
                        <input className='flex-1 text-gray-800' type="text" {...register('category')} />
                    </label>

                    <label className='flex p-5'>
                        <span className='min-w-60'>Sub Category:</span>
                        <div>
                            <div>
                                <input
                                    className=' text-gray-800'
                                    type="text"
                                    placeholder="Enter option title"
                                    value={subCategory}
                                    onChange={(e) => setSubCategory(e.target.value)}
                                />
                                <button className='mx-5 outline outline-custom-green rounded-2xl hover:outline-custom-purple p-2' type="submit" onClick={handleAddSubCategory}>Add Sub Category</button>
                             </div>
                        <div className='m-2'>
                                <Card className="h-auto max-h-[400px] overflow-y-auto">
                                    <div className="flex flex-wrap max-w-80">
                                        
                                        {
                                            subCategories.map((subcat, index) => (
                                            <div className='p-1' key={index}>
                                                <div className='  flex justify-between border-custom-appgreeen border p-2 rounded-xl'> {subcat}
                                                        <div className='m-1' onClick={(e) => {
                                                            e.preventDefault();
                                                            setSubCategories(prevOptions => {
                                                                return prevOptions.filter((opt) => opt !==  subcat);
                                                            });
                                                        }}>
                                                            <HiX className="h-4 w-4 hover:text-custom-red" />
                                                        </div>
                                                    </div>
                                                    </div>
                                            ))}
                                        </div>
                                </Card>
                            </div>
                        </div>
                    </label>
                    <label className='flex p-5 '>
                        <span className='min-w-60 '>Question Type:</span>
                        <select className=' text-gray-700' {...register("question_type")}>
                            {
                                Object.values(QuestionType).map((item) => <option value={item} onSelect={(option) => {
                                    setValue('question_type', option)
                                }}>{item}</option>)
                            }
                        </select>
                    </label>
                    
                    <label className='flex p-5 '>
                        <span className='min-w-60'>Question Status:</span>
                        <input className='flex-1 text-gray-800' type="text" {...register('question_status')} />
                    </label>
                </div>
                <div>
                   { isLoading ? <div>Loading</div> :  <Button type='submit' outline className='mx-5 outline outline-custom-green rounded-2xl hover:outline-custom-purple p-2'>Save Question</Button>}
                </div>
            </form>
        </Card>)
};