import React, { useState } from "react";
import { Star } from "lucide-react";

type StarRatingProps = {
  totalStars?: number;
  value?: number; // ahora puede ser decimal, ej. 4.5
  onChange?: (value: number) => void;
  readOnly?: boolean;
  size?: number;
  bgColor?: string;
  activeColor?: string;
  borderColor?: string
};

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  value,
  onChange,
  readOnly = false,
  size = 15,
  bgColor = "#fff",
  activeColor = "#f5a623",
  borderColor = "#ccc",
}) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [internalValue, setInternalValue] = useState<number>(0);

  const currentValue = value ?? internalValue;

  const handleClick = (index: number) => {
    if (readOnly) return;

    const newValue = index + 1;
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (!readOnly) setHoveredStar(index + 1);
  };

  const handleMouseLeave = () => {
    if (!readOnly) setHoveredStar(null);
  };

  const getStars = () => {
    const displayValue = hoveredStar ?? currentValue;

    return Array.from({ length: totalStars }, (_, i) => {
      let fillColor = borderColor;
      let fill = "none";

      if (i + 1 <= displayValue) {
        fillColor = activeColor;
        fill = activeColor;
      } else if (i < displayValue && displayValue < i + 1) {
        // Media estrella
        fillColor = activeColor;
        fill = `url(#half-gradient-${i})`; // Definiremos esto más abajo
      }

      return (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={`transition-colors ${
            readOnly ? "cursor-default" : "cursor-pointer"
          }`}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          <defs>
            <linearGradient id={`half-gradient-${i}`} x1="0" x2="100%" y1="0" y2="0">
              <stop offset="50%" stopColor={activeColor} />
              <stop offset="50%" stopColor={bgColor} />
            </linearGradient>
          </defs>
          <Star
            color={fillColor}
            fill={fill}
          />
        </svg>
      );
    });
  };

  return (
    <div className="flex items-center" role="radiogroup" aria-readonly={readOnly}>
      {getStars()}
    </div>
  );
};

export default StarRating;
