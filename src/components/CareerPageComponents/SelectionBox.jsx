import React from 'react'

export default function SelectionBox({ test, className }) {
  return (
    <>
    <select className={`w-[100%] bg-gray-100 p-2 border border-gray-400 rounded-xl h-10 ${className}`}>
        {(test.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
        )))}
    </select>  
    </>
  )
}

