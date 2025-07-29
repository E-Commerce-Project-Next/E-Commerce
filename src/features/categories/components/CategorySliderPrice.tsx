'use client';
import { Slider } from '@/components/ui/slider'
import { useState } from 'react'


export default function CategorySliderPrice() {
  const [value, setValue] = useState<number[]>([0, 100])

  return (
    <section className="border p-8 w-full min-w-[280px] rounded-b-lg">
      <h2 className="text-2xl border-l-4 pl-4 border-black mb-4">
        Price
      </h2>
      <Slider
        min={0}
        max={500}
        step={1}
        value={value}
        onValueChange={setValue}
        className="w-full"
        defaultValue={[0, 100]}
      />
      <div className="flex justify-between mt-2 text-sm text-muted-foreground">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
    </section>
  )
}


