"use client"

import React from 'react'
import {GroupDesign} from './GroupDesign'
import { Button, Card } from 'flowbite-react';

type Props = {
    data: any;
}

export const PaperDesigner = (props: Props) => {
    const data = props.data;



    return (<>
        <Card>
        <div className='flex justify-between'>
            <div>PaperDesigner</div>
             <Button> Add Group</Button>
        </div>

        <div className=' m-5 p-5 bg-custom-gray round'>
            {
                data.groups.map((item:any) => <>
                    <GroupDesign data={item}>
                    </GroupDesign>
                </>)
            }
            </div>
            </Card>
        </>
  )
}

