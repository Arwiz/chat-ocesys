import React from 'react';
import ProjectCard from './projectcard';

type T = any;

type Props = {
    items: T[];
    rowSelectedHandler?: (t: T) => void;
};

const ItemList = (props: Props) => {
    return (
        <div className="flex-1 h-max overflow-y-auto">
            {props.items.map((item) => (<div key={item._id}>
                <ProjectCard item={item} callBack={props.rowSelectedHandler} />
                </div>
            ))}
        </div>
    );
};

export default ItemList;
