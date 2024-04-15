import React, { useState, ChangeEvent } from 'react';

const Remarks: React.FC = () => {
  // State to store the remarks
  const [remarks, setRemarks] = useState<string>('');

  // Function to handle remarks change
  const handleRemarksChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setRemarks(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Remarks */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Remarks:
        </label>
        <textarea
          value={remarks}
          onChange={handleRemarksChange}
          className="border rounded p-2 w-full h-24 resize-none bg-gray-900"
          placeholder="Enter remarks here..."
        />
      </div>
    </div>
  );
};

export default Remarks;