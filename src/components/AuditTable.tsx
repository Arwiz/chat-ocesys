"use client";

import { Table } from "flowbite-react";
import { useRouter } from "next/navigation";

interface AuditTable {
    cols: string[];
    rows: any[];
}

export function AuditTableComponent({
    cols,
    rows
}: AuditTable) {

    const router = useRouter();

  return (
    <div className="overflow-x-auto">
      <Table>
              <Table.Head>
                  {
                      cols?.map((col, index) => (<Table.HeadCell key={index+1}>{col}</Table.HeadCell>))
                  }
          {/* <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell> */}
        </Table.Head>
        <Table.Body className="divide-y">
            {
                          rows?.map((row) => (
                              row && <Table.Row key={row._id} className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-custom-purple hover:text-white " onClick={() => {
                                  router.push(`/dashboard/audit/${row?._id}`);
                               }}>
                                  <Table.Cell>{row?.paper_id?.title}</Table.Cell>
                                  <Table.Cell>{row.user_id}</Table.Cell>
                                  <Table.Cell>{row.created_at}</Table.Cell>
                                   {/* <Table.Cell>
                                        <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                            Edit
                                        </a>
                                  </Table.Cell> */}
                              </Table.Row>))
                      }
        </Table.Body>
      </Table>
    </div>
  );
}