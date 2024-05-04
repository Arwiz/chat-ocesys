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
    pageChangeHandler: (page:number) => void
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
          <div className="flex overflow-x-auto sm:justify-center">
             <Dropdown className=' outline bg-custom-appgreeen' label={`Limit: ${limit}`}>
                <Dropdown.Item onClick={() => handleLimitChange(10)}>10</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLimitChange(20)}>20</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLimitChange(50)}>50</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLimitChange(100)}>100</Dropdown.Item>
            </Dropdown>
              
           <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
      </div>
  )
}
