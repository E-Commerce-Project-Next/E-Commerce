// components/NumberField.tsx
import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';

interface NumberFieldProps {
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
}

const NumberField: React.FC<NumberFieldProps> = ({
  min = 0,
  max = Infinity,
  step = 1,
  initialValue = 0,
  onChange,
}) => {
  const [value, setValue] = useState<number>(initialValue);

  const handleIncrement = () => {
    const newValue = Math.min(value + step, max);
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleDecrement = () => {
    const newValue = Math.max(value - step, min);
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <div
      className="flex items-center border-1 border-black/10 rounded-full overflow-hidden"
      style={{ width: 120, height: 40 }}
    >
      <button
        onClick={handleDecrement}
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition"
        aria-label="Decrease"
      >
        <MinusIcon className="w-4 h-4" />
      </button>
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        className="w-12 h-10 text-center border-black focus:outline-none inputNoSpinners hover:bg-gray-100 transition"
        style={{ minWidth: 0 }}
      />
      <button
        onClick={handleIncrement}
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition"
        aria-label="Increase"
      >
        <PlusIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default NumberField;
