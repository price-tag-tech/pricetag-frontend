import { X } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
    maxUploads?: number;
}

const FileUpload = ({ maxUploads }: Props) => {
    const [files, setFiles] = useState<File[]>([]);

    const MAX_UPLOADS = maxUploads || 7;

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (files.length + acceptedFiles.length > MAX_UPLOADS) return;
        setFiles(prev => [...prev, ...acceptedFiles]);
    }, [files]);

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        maxFiles: MAX_UPLOADS,
    });

    return (
        <div className="w-full flex flex-col gap-y-3">
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-6 h-44 w-full flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer ${isDragActive ? 'bg-green-50 border-green-400' : 'bg-white border-gray-300'
                    }`}
            >
                <input {...getInputProps()} />
                <p className="text-sm text-gray-500">Drag & drop or click to choose files</p>
                <p className="text-xs text-gray-400 mt-1">Max file size: 10MB</p>
            </div>

            {/* File previews */}
            {files.length > 0 && (
                <div className='flex flex-wrap gap-4 mt-4'>
                    {files.map((file, index) => (
                        <div key={index} className='relative w-20 h-20 rounded overflow-hidden border bg-white shadow'>
                            <img
                                src={URL.createObjectURL(file)}
                                alt={`upload-${index}`}
                                className='w-full h-full object-cover'
                            />
                            <button
                                onClick={() => removeFile(index)}
                                className='absolute top-1 right-1 bg-white bg-opacity-70 rounded-full p-1 hover:bg-red-100'
                            >
                                <X className='w-4 h-4 text-red-500' />
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <p className='text-xs text-red-500 mt-2 font-bold'>{files.length >= MAX_UPLOADS && `Max of ${MAX_UPLOADS} uploads reached`}</p>
        </div>
    )
}

export default FileUpload