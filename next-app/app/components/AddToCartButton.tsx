'use client'
import React from 'react'

const AddToCartButton = ({
  children,
}: { children: React.ReactNode }) => {
  return (
    <>
      <button
        className='btn btn-primary'
        onClick={() => console.log("Small component click")}>
        {children}
      </button>
    </>
  )
}

export default AddToCartButton