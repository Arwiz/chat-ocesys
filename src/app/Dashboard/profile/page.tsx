import React from 'react';

import Counter from '@/components/counter';

type Props = {};

const page = (props: Props) => {
    return (<div>
        <h2>Profile</h2>
        <Counter></Counter>
    </div>
    );
};

export default page;
