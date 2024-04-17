'use client'
import { Accordion } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import QuestionRenderer from './question'
import { Button } from './Button'
import { useDispatch } from 'react-redux'
import { start_audit } from '@/redux/slices/auditSlice'
import PreviewModal from './PreviewModal'
import GroupAccordianPreview from './GroupAccordianPreview'

type Props = {
    data: any
}

const GroupAccordian = (props: Props) => {

  const { data } = props;

   const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
  
  

  const audit_id = props.data._id;

  const dispatch = useDispatch();

    const [selectedGroup, setSelectedGroup] = useState<any>(null);

    useEffect(() => {
        if (props?.data.groups?.length > 0) {
            setSelectedGroup(props?.data.groups[0]);
         }
    },[]);

  
   useEffect(() => {
        if (audit_id) {
            dispatch(start_audit({audit_id}));
         }
    },[audit_id]);
  

    return (
      <div className='bg-gray-950 flex-1'>
        <div className=' p-5 flex justify-center'>
         <h1 className=' text-yellow-200 text-3xl'>{data.title}</h1>
        </div>
        <div className='flex'>
      <div className='border-r  min-h-full border-gray-300 '>
          {
            props?.data.groups.map((row:any) => (

                <div onClick={() => setSelectedGroup(row)}
                className={`border-r border-b border-gray-300 p-4 hover:bg-yellow-400 ${
                selectedGroup === row ? ' bg-yellow-400' : ''
              }`}>
                    <div>{row.title}</div>
                </div>
            )) 
          }
    </div>
       <div className='flex-1'>
         {(selectedGroup && <div className='flexflex-1 bg-gray-950'>
                <h2 className=' mt-10 m-5 pt-10 font-bold border-b-2 '>{selectedGroup.title}</h2>
                <QuestionRenderer questionData={selectedGroup?.questions} title={selectedGroup.title} ></QuestionRenderer>
            </div>
        )}
          </div>
        </div>
        <div className='flex justify-end items-center  border-t-2  p-5'>
           <Button title='Verify...    ' handler={() => {
            console.log('Submit called');
            handleOpenModal();
            }}></Button>
            
        </div>
        {/* Preview Model to verify all the inputs */}
        <PreviewModal isOpen={isModalOpen} onClose={handleCloseModal}  >
          <div>
            <GroupAccordianPreview data={props.data} ></GroupAccordianPreview>
          </div>
        </PreviewModal>
        
    </div>
  )
}

export default GroupAccordian;