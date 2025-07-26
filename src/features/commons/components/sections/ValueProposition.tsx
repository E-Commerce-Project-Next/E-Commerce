import React from 'react'

export default function ValueProposition() {
  return (
    <div className="flex flex-col gap-10 text-black/80 text-xl  max-w-xl">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="flex">
          <div className="flex flex-col gap-5">
            <strong className="text-5xl">99%</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>
          <div className="flex flex-col gap-5 ml-10">
            <strong className="text-5xl">100%</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
          </div>
        </div>
      </div>
  )
}
