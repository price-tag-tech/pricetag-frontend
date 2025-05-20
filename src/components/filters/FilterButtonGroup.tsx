import React from 'react';
import { FilterOption } from './types';

interface FilterButtonGroupProps {
  options: FilterOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const FilterButtonGroup: React.FC<FilterButtonGroupProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  const buttonBaseClasses =
    "flex-shrink-0 h-[2.0625rem] rounded-lg text-xs transition-colors flex items-center justify-center overflow-hidden whitespace-nowrap";
  const buttonActiveClasses = "bg-[#1dbf73] text-white";
  const buttonInactiveClasses =
    "border border-[#dadada] text-[#444] bg-white hover:bg-gray-50";

  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <button
          key={option.id}
          className={`${buttonBaseClasses} ${
            option.width || "w-auto"
          } ${
            selectedValue === option.id
              ? buttonActiveClasses
              : buttonInactiveClasses
          }`}
          onClick={() => onChange(option.id)}
        >
          <span className="px-2 truncate">{option.label}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterButtonGroup;