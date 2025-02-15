import React from 'react'

const ButtonWithSpinner = ({loading, text, className}) => {
    return (
        <button 
        type='submit' 
        className={`inline-flex justify-center  mt-4 transition duration-150 ease-in-out bg-gold text-white active:bg-gold-dark rounded-lg w-full p-2 disabled:bg-gold-dark disabled:text-gray-300  disabled:cursor-not-allowed`} 
        disabled={loading}>
            {loading&& 
            <svg className="mr-3 -ml-1 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>}
            {loading? "Loading...": text}
        </button>
    )
}

export default ButtonWithSpinner


//cursor-not-allowed items-center rounded-md bg-indigo-500 px-4 py-2 text-sm leading-6 font-semibold text-white transition duration-150 ease-in-out hover:bg-indigo-400