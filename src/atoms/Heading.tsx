import React from 'react'

type Props = {
  children: React.ReactNode,
  style?: string
}

export const Heading500 = ({children}: Props) => {
  return (
     <div className='m-5 underline text-custom-appgreeen p-2 text-xl'>
            { children }
    </div>
  )
}

export const Heading400 = ({children}: Props) => {
  return (
     <div className='m-5 float-left border-2 border-custom-appgreeen p-1'>
            { children }
    </div>
  )
}

export const Heading300 = ({children}: Props) => {
  return (
     <div className='m-5 float-left border-2 border-custom-appgreeen p-1'>
            { children }
    </div>
  )
}

export const Heading200 = ({children}: Props) => {
  return (
     <div className='m-5 float-left border-2 border-custom-appgreeen p-1'>
            { children }
    </div>
  )
}

export const Heading100 = ({children}: Props) => {
  return (
     <div className='m-5 float-left border-2 border-custom-appgreeen p-1'>
            { children }
    </div>
  )
}

export const HeadingDesignNormal = ({children, style}: Props) => {
  return (
    <div className={`text-xl text-custom-appgreen text-custom-appgreeen p-2 ${style||''}`}>   { children }</div>
  )
}