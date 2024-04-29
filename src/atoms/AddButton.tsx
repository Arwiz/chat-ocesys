import React from 'react'
          
type Props = {
        children: React.ReactNode,
        handller: () => void,
        style?: string
    }
          
export const AddButton = (props: Props) => {
    return (
        <div className={`m-5 p-2 px-5 justify-center border-2 rounded-3xl  border-custom-purple hover:border-custom-appgreeen  ${props.style || ''}`}>
              <button onClick={props.handller}> { props.children || 'Add +' } </button>
          </div>
    )
}