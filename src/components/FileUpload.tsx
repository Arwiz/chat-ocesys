import React, { useState, ChangeEvent } from 'react';

const FileUpload: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            const filesArray = Array.from(selectedFiles);
            setFiles([...files, ...filesArray]);
        }
    };

    const handleRemoveFile = (index: number) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };


    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Upload Files:
                </label>
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="border rounded bg-gray-900"
                    multiple
                />
            </div>

            {files.length > 0 && (
                <div>
                    <h2 className="text-lg font-bold mb-2">Uploaded Files:</h2>
                    <ul>
                        {files.map((file, index) => (
                            <li key={index} className="flex items-center mb-1">
                                <span>{file.name}</span>
                                <button
                                    onClick={() => handleRemoveFile(index)}
                                    className="ml-2 p-1 bg-red-500 text-white rounded"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default FileUpload;