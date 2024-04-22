import React from 'react'

type Props = {
    title: string;
    value: string;

}

export const KeyVal = ({title, value}: Props) => {
  return (
     <div className='flex'>
          <span className='font-bold px-5 text-gray-500 '>{ title}: </span>
           <span className='font-bold px-2 text-gray-300 '>{value}</span>
    </div>
  )
}
