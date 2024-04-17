import React, { useState } from 'react';

interface PreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode,
}

const PreviewModal: React.FC<PreviewModalProps> = ({ isOpen, onClose, children }) => {
    return (
        <>
            {/* Modal backdrop */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50"></div>

                    {/* Modal content */}
                    <div className="bg-gray-600 rounded-lg shadow-lg z-10 w-screen h-screen flex flex-col">
                        {/* Modal header */}
                        <div className="flex justify-end p-5">
                            {/* <h2 className="text-xl font-semibold">Preview</h2> */}
                            {/* Close button */}
                            <button
                                className=" text-yellow-300 hover:text-yellow-500 focus:outline-none"
                                onClick={onClose}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {/* Modal body with scrollbar */}
                        <div className="flex-1 overflow-y-auto">
                              {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PreviewModal;