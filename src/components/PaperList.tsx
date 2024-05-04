"use client"
import { redirect, useRouter } from 'next/navigation'
import React from 'react'
import { CommonTable } from './CommonTable'
import { KeyVal } from './keyval'
import { AddButton } from '@/atoms/AddButton'

export type Props = {
    data: any
}

const colsData: KeyVal[] = [
     {
        titleKey: '_id',
        title: 'Id',
     },
      {
        titleKey: 'title',
        title: 'Title',
    }
]


export const PaperList = ({ data }: Props) => {
    const router = useRouter();

    const onClickHandler = (row: any) => {
      console.log(" i am called", row)
      router.push(`/dashboard/organizations/design/${row._id}`)
    }
  
    const addNewTemplate = () => {
      console.log(" i am called", row)
    }
  
  const pageChangeHandler = (page: number) => {
      
    }
  

    return (<div className=" bg-custom-dark">
      <div>PaperList</div>
           <AddButton handller={addNewTemplate}> Add New Template</AddButton>
            <CommonTable cols={colsData} rows={data.papers} totalPages={data.totalItems} onClickHandler={onClickHandler} pageChangeHandler={pageChangeHandler} />
            <CommonTable cols={colsData} rows={data.papers} totalPages={data.totalItems} onClickHandler={onClickHandler} pageChangeHandler={pageChangeHandler}  /> 
        </div>
  )
}