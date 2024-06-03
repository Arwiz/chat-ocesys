'use client'
import { Dropdown, Pagination } from 'flowbite-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {
    totalPages: number,
    updateHanlder?: (page: number, limit: number )=>void
}

export const PaginationComponent = ({ updateHanlder, totalPages }: Props) => {

    const router = useRouter();

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = () => {
        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString());
        params.set('limit', limit.toString());
        return `${pathname}?${params.toString()}`;
    };

    

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)

    useEffect(() => { 
        const str = createPageURL();
          console.log('', page, limit, str);
        router.replace(str);


    }, [page, limit]);  


    const calculateLenthPfItems = () => {
        
        console.log('calculateLenthPfItems => ', totalPages % limit > 1 ? totalPages / limit : 1)
        return Math.ceil(totalPages/limit)
    }

    

  return (
      <div>
          <div className="flex overflow-x-auto sm:justify-center">
             <Dropdown className=' outline bg-custom-appgreeen' label={`Limit: ${limit}`}>
                <Dropdown.Item onClick={() => setLimit(10)}>10</Dropdown.Item>
                <Dropdown.Item onClick={() => setLimit(20)}>20</Dropdown.Item>
                <Dropdown.Item onClick={() => setLimit(50)}>50</Dropdown.Item>
                <Dropdown.Item onClick={() => setLimit(100)}>100</Dropdown.Item>
            </Dropdown>
            <Pagination currentPage={page} totalPages={ calculateLenthPfItems()  } onPageChange={(p) => setPage(p)} />
        </div>
    </div>
  )
}