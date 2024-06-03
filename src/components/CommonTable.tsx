'use client'
import { Table } from 'flowbite-react';
import React, {useState} from 'react'
import { KeyVal } from './keyval';
import { useRouter } from 'next/navigation';
import { Pagination } from "flowbite-react";

import { Dropdown } from "flowbite-react";


type Props = {
    cols: KeyVal[],
    rows: any[],
    totalPages?: number,
    onClickHandler: (row: any) => void,
    pageChangeHandler: (orgId: number, page:number, limit: number ) => void
}

export const CommonTable = ({ cols, rows, totalPages=1, onClickHandler, pageChangeHandler }: Props) => {
    
const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState<number>(10);
     


    const onPageChange = (page: number) => {
        setCurrentPage(page);
        pageChangeHandler(page);
    };

      const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
  };


  return (
      <div className="overflow-x-auto m-5">
      <Table>
        <Table.Head>
            {
                cols?.map((col, index) => (<Table.HeadCell key={index+1}>{col.title}</Table.HeadCell>))
            }
        </Table.Head>
        <Table.Body className="divide-y">
            {
                rows?.map((row , index ) => (
                    row && <Table.Row key={row._id} className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-custom-purple hover:text-white " onClick={() => {
                        onClickHandler(row);
    
                    }}>
                        {
                            cols?.map((col, index) => ( <Table.Cell key={row._id}>{row[col.titleKey]}</Table.Cell>))
                        }
                    </Table.Row>
                ))
             }
            </Table.Body>
          </Table>
      </div>
  )
}
