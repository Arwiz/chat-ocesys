import { Button } from 'flowbite-react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { KeyValue } from './keyval';
import Link from 'next/link';

type Props = {
    item: any,
    callBack: (item: any) => void
}

const ProjectCard = ({
    item,
    callBack = (selectedItem: any) => { }
    
}: Props) => {
    return (
        <Link href={{ pathname: '/dashboard/poker/pokerroom', query: { project_id: item._id} }}>
      <div className='flex-1 outline-1 border-cyan-500 bg-gray-900 p-2 m-5 ml-10 mr-10 rounded-md shadow-purple-950 bg-slate-8 hover:scale-105 transition-all duration-100 shadow'>
          <div className='flex'>
              <div className='flex-1'>
                    <KeyValue titleKey={'Title'} value={'21132321'} />
                    <KeyValue titleKey={'Title'} value={'21132321'} />
                    <KeyValue titleKey={'Title'} value={'21132321'} />
              </div>
              <div className='flex items-center justify-center align-middle '>
                  {/* <Button onClick={() => {
                      console.log('sdfsdfds');
                  }}> 
                             <FaArrowRight />
                </Button> */}
                  <Button onClick={()=>callBack(item)}>
                      <FaArrowRight />
                  </Button>
              </div>
        </div>
            </div>
            </Link>
  )
}

export default ProjectCard