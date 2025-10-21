import React, { useState, ReactNode } from 'react';

interface FilterSectionProps {
  title: string;
  icon: ReactNode;
  defaultExpanded?: boolean;
  children: ReactNode;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  icon,
  defaultExpanded = true,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

  return (
    <div className="border-t border-gray-200 first:border-t-0">
      <button
        className="w-full flex items-center justify-between px-4 py-4 focus:outline-none group hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className="mr-3 text-[#1dbf73]">{icon}</div>
          <span className="text-gray-800 font-medium text-base">
            {title}
          </span>
        </div>
        <svg
          width={12}
          height={8}
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
        >
          <path d="M6 8L0 0H12L6 8Z" fill="#444444" />
        </svg>
      </button>

      {isExpanded && <div className="px-4 pb-5">{children}</div>}
    </div>
  );
};

export default FilterSection;