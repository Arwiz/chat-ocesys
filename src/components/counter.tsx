'use client'

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '@/redux/slices/profileSlice';

type Props = {};

const Counter = () => {
    // The `state` arg is correctly typed as `RootState` already
  const count = useSelector((state: any )=> state.profile.value)
    const dispatch = useDispatch();

    return (<div className=' container h-full w-full'>
        <div> Slected Value {count} </div>
        <div className=' justify-center m10'>
        <button className=' bg-cyan-600 rounded hover: bg-cyan-700' onClick={() => {
                
                 dispatch(increment());
        }}> Increment Value</button>

         <button className=' bg-cyan-600 rounded hover: bg-cyan-700' onClick={() => {
                  dispatch(decrement());
            }}> Decrement Value</button>
         </div>
    </div>
    );
};

export default Counter;
