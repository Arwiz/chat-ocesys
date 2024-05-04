import React from 'react'

type Props = {
    title: string;
    value?: string;

}

export const KeyVal = ({title, value}: Props) => {
  return (
     <div className='flex'>
          <span className='px-5 text-gray-500 '>{title}</span>
           <span className='px-2 text-gray-400 '>{value}</span>
    </div>
  )
}
