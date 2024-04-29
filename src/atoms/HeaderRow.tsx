"use client"
import React from 'react'
import { Heading500 } from './Heading';
import { AddButton } from './AddButton';
import { AddAuditComponent } from '@/components/AddAuditModal';

type Props = {}

export const HeaderRow = (props: Props) => {
  return (
      <div className=' flex justify-between mx-10 my-5'>
          <Heading500>Audit Templates</Heading500>
          <AddAuditComponent />
      </div>
  )
}