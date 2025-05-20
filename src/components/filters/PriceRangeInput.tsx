import React from 'react';
import Button from '../common/Button';

interface PriceRangeInputProps {
  minValue: string;
  maxValue: string;
  onMinChange: (value: string) => void;
  onMaxChange: (value: string) => void;
  onSubmit: () => void;
}

const PriceRangeInput: React.FC<PriceRangeInputProps> = ({
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  onSubmit,
}) => {
  return (
    <div className="mt-4">
      <div className="text-[#1f1f1f] font-['Poppins'] text-[.8125rem] font-medium mb-2">
        Custom Price Range
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative w-[4.8125rem]">
          <input
            type="text"
            value={minValue}
            onChange={(e) => onMinChange(e.target.value)}
            className="w-full h-[2.0625rem] rounded-lg border border-[#1f1f1f] pl-8 pr-2 text-xs"
            placeholder="Min"
          />
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#aeaeae] text-xs">
            ₦
          </span>
        </div>

        <div className="relative w-[4.8125rem]">
          <input
            type="text"
            value={maxValue}
            onChange={(e) => onMaxChange(e.target.value)}
            className="w-full h-[2.0625rem] rounded-lg border border-[#1f1f1f] pl-8 pr-2 text-xs"
            placeholder="Max"
          />
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#aeaeae] text-xs">
            ₦
          </span>
        </div>

        <Button
          variant="outline"
          disableFocusRing={true}
          onClick={onSubmit}
          className="flex-shrink-0 w-12 h-[2.0625rem] rounded-lg border border-[#1dbf73] text-[#1dbf73] font-semibold text-[.8125rem] flex items-center justify-center hover:bg-[#1dbf73] hover:text-white transition-colors"
        >
          Go
        </Button>
      </div>
    </div>
  );
};

export default PriceRangeInput;