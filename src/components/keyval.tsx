import { Button } from 'flowbite-react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';


export type KeyVal = {
    title?: string;
    titleKey: string;
    value?: string;
};


export const KeyValue = (props: KeyVal) => {
    return (
        <div className="flex m-2">
            <div className=" text-slate-400 pr-2">{props.titleKey} </div>
            <div className=" text-blue-200">{props.value}</div>
        </div>
    );
};
