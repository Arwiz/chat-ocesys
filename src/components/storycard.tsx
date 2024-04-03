import Link from 'next/link';
import { Button } from 'flowbite-react';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { KeyValue } from './keyval';

type Props = {
    item: Story;
    callBack: (item: Story) => void;
};

export interface Vote {
    name: string;
    poke: number;
    user_id: string;
}

export interface Story {
    name?: string;
    _id?: string;
    project_id: string;
    voting: { [key: string]: Vote };
}

const StoryCard = ({ item, callBack = (selectedItem: any) => {} }: Props) => {
    return (
        <div
            onClick={() => callBack(item)}
            className="flex outline-1 border-cyan-500 bg-gray-900 p-2 m-5 ml-10 mr-10 rounded-md shadow-purple-950 bg-slate-8 hover:scale-105 transition-all duration-100 shadow"
        >
            <div className="flex">
                <div className="flex-1">
                    <KeyValue titleKey={'Project'} value={item?.name || ''} />
                </div>
                <div className="flex items-center justify-center align-middle ">
                    <FaPlus />
                </div>
            </div>
        </div>
    );
};

export default StoryCard;
