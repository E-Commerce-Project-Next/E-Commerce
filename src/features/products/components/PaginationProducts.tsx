import React from 'react'

export default function PaginationProducts({children}: {children: React.ReactNode}) {
    return (
    <div className="flex flex-col items-center gap-5 mt-5">
        {children}
    </div>
  )
}
