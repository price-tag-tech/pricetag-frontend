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
    <div className="border-t border-[#e7e7e9]">
      <button
        className="w-full flex items-center justify-between px-4 py-3 focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className="mr-2">{icon}</div>
          <span className="text-[#1f1f1f] font-['Poppins'] text-[.9375rem] font-medium">
            {title}
          </span>
        </div>
        <svg
          width={10}
          height={6}
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
        >
          <path d="M10 0V1.71429L5 6L0 1.71429V0L5 4.28571L10 0Z" fill="#444444" />
        </svg>
      </button>

      {isExpanded && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
};

export default FilterSection;