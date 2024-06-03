import React from 'react';

import Counter from '@/components/counter';
import { fetchWithToken } from '@/lib/network.helper';

type Props = {};

const callService = async () => {

    const data = await fetchWithToken('http://localhost:3003/api/users', 'GET');

    console.log("data => ", data    );

    return data;
}

const page = async (props: Props) => {

    const data = await callService();
    

    return (<div>
        <h2>Profile</h2>
        <Counter></Counter>
    </div>
    );
};

export default page;

