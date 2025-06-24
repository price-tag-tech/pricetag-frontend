import React from 'react'
import { useNavigate } from 'react-router-dom'

const UploadSuccess = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-3">
                Product Upload Successful!
            </h1>

            <p className="text-sm md:text-base text-gray-500 max-w-xl mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <button
                onClick={() => navigate(-1)}
                className="text-brand-500 min-w-40 py-3 font-semibold border border-brand-500 px-6 rounded-md hover:bg-green-50 transition"
            >
                Go Back
            </button>

            <img
                src="/assets/illustrators/celebrate.svg"
                alt="Success"
                className="mt-10 max-w-xs w-full"
            />
        </div>
    )
}

export default UploadSuccess
