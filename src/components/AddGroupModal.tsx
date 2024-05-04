import React from 'react';
import { withModal } from './ModalView';

// Define props interface for YourComponent
interface YourComponentProps {
    title: string;
    children: React.ReactNode;
  onClickHandler: () => void;
}

// Your custom component
const YourComponent: React.FC<YourComponentProps> = ({ children, title, onClickHandler }) => {
  return (
    <div>
      <p>Add Modal for Group</p>
      <button onClick={onClickHandler}>Click Me</button>
    </div>
  );
};

// Enhance YourComponent with the withToken higher-order component
export const AddGroupModal = withModal(YourComponent);
