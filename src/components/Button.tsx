import React from 'react'

export type UnknownFunction = (...args: any[]) => void;

export type ButtonProps = {
    title: string;
    handler: UnknownFunction;
}

export const Button = (props: ButtonProps) => {
  return (
      <div className='m-2 p-2 bg-cyan-900 rounded bg-gradient-to-t text-center' onClick={props.handler}>{props.title}</div>
  )
}
