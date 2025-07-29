import React from 'react'

interface PaginationProductsProps {
    range: [number, number];
    total: number;
}

export default function PaginationProducts({range, total}: PaginationProductsProps) {
  return (
    <p className="flex items-center font-semibold">
        Showing {range[0] + 1} - {range[1] + 1} of {total} item(s)
    </p>
  )
}
