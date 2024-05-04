"use client"

import React from 'react'
import {GroupDesign} from './GroupDesign'
import { Button, Card } from 'flowbite-react';
import { usePaperContext } from '@/context/PaperContextProvider';
import { KeyVal } from '@/atoms/KeyVal';
import { AddGroupModal } from './AddGroupModal';

type Props = {
    data: any;
}

export const PaperDesigner = (props: Props) => {
    const data = props.data;
    const { currentPaper } = usePaperContext();
    console.log('data', data, currentPaper)

    return (<div color='dark p-2' className=' bg-black'>
         <div className='flex align-middle justify-between'>
        <div className=' mx-10 pt-8 justify-around'>
                    <KeyVal title='Name' value={currentPaper?.title} />
        </div>
             <AddGroupModal title='Arvind'  onClickHandler={() => {
                    console.log('Arvind Click me');
                }}>Add Group</AddGroupModal>
        </div>
       
        <div className='bg-custom-gray round'>
            {
                data.groups.map((item:any) => <>
                    <GroupDesign data={item}>
                    </GroupDesign>
                    </>)
            }
        </div>
        <div className=' flex justify-center bg-black py-5'>
            {/* <Button color="dark" pill className=' min-w-20 hover:outline-custom-appgreeen hover:text-custom-appgreeen'> Add Group</Button> */}
        </div>
            
        </div>
  )
}

