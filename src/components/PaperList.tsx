"use client"
import { redirect, useRouter } from 'next/navigation'
import React from 'react'
import { CommonTable } from './CommonTable'
import { KeyVal } from './keyval'

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

    return (<div className=" bg-custom-dark">
            <div>PaperList</div>
        <CommonTable cols={colsData} rows={data.audits} onClickHandler={onClickHandler} />
        <CommonTable cols={colsData} rows={data.common_audits} onClickHandler={onClickHandler} /> 
        </div>
  )
}