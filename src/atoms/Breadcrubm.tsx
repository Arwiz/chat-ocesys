"use client";

import { Breadcrumb } from "flowbite-react";
import { useRouter } from "next/navigation";
import { HiHome } from "react-icons/hi";

interface KeyVal{
    title: string,
    value?: string
}

type Props = {
    data: KeyVal[]
}
export function BreadcrumbComponent(props:Props) {
    const { data } = props;
    
    const router = useRouter();

    return (
          <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800 sticky">
            {
                data.map((bc) => <Breadcrumb.Item className="hover:text-white " href= {bc.value}>{bc.title}</Breadcrumb.Item>)
            }
           </Breadcrumb>
    
  );
}
