'use server';

import { SERVER_API_URL } from '@/utils/fetch-data';

export const callPaperPaginations = async (
    org_id: string,
    page?: number,
    limit?: number
) => {
    // const res = await fetch(`${SERVER_API_URL}/organizations/${org_id}`, { cache: 'no-store' })
    const pageNum = page || 1;
    const limitCout = limit || 1;

    if (page) {
        page;
    }
    const res = await fetch(
        `${SERVER_API_URL}/organizations/${org_id}/papers?limit=${limitCout}&page=${pageNum}`,
        {
            next: {
                revalidate: 0,
            },
        }
    );

    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    console.log(res);

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
};
