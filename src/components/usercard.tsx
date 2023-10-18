import { Button } from 'flowbite-react';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { KeyValue } from './keyval';

type Props = {
    item: any,
    callBack: (item: any) => void
}

const UserCard = ({
    item,
    callBack = (selectedItem: any) => { }
    
}: Props) => {
  return (
      <div className='flex outline-1 border-cyan-500 bg-gray-900 p-2 m-5 ml-10 mr-10 rounded-md shadow-purple-950 bg-slate-8 hover:scale-105 transition-all duration-100 shadow'>
          <div className='flex'>
              <div className='flex-1'>
                    <KeyValue titleKey={'Email'} value={item.email} />
              </div>
              <div className='flex items-center justify-center align-middle '>
                  <Button onClick={()=>callBack(item)} title='Join'>
                      <FaPlus />
                  </Button>
              </div>
        </div>
      </div>
  )
}

export default UserCard