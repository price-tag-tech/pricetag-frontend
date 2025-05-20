import React, { useState } from "react";
import FilterSection from "./FilterSection";
import FilterButtonGroup from "./FilterButtonGroup";
import PriceRangeInput from "./PriceRangeInput";

interface FilterDropdownProps {
  onFilterChange?: (filters: {
    productType?: string;
    priceRange?: string;
    customPriceMin?: string;
    customPriceMax?: string;
  }) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  onFilterChange = () => {},
}) => {
  const [selectedProductType, setSelectedProductType] = useState<string>("All Products");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const productOptions = [
    { id: "All Products", label: "All Products", width: "w-[6.125rem]" },
    {
      id: "Top selling products",
      label: "Top selling products",
      width: "w-[9.25rem]",
    },
    {
      id: "Sponsored products",
      label: "Sponsored products",
      width: "w-[9.25rem]",
    },
    {
      id: "Products with free delivery",
      label: "Products with free delivery",
      width: "w-[11.5625rem]",
    },
  ];

  const priceRangeOptions = [
    { id: "Under ₦2,000", label: "Under ₦2,000", width: "w-[6.5625rem]" },
    {
      id: "₦5,000 - ₦10,000",
      label: "₦5,000 - ₦10,000",
      width: "w-32",
    },
    {
      id: "₦10,000 - ₦100,000",
      label: "₦10,000 - ₦100,000",
      width: "w-[8.4375rem]",
    },
    {
      id: "₦100,000 above",
      label: "₦100,000 above",
      width: "w-[7.5625rem]",
    },
  ];

  const handleProductTypeSelect = (type: string) => {
    setSelectedProductType(type);
    onFilterChange({
      productType: type,
      priceRange: selectedPriceRange,
      customPriceMin: minPrice,
      customPriceMax: maxPrice,
    });
  };

  const handlePriceRangeSelect = (range: string) => {
    setSelectedPriceRange(range);
    onFilterChange({
      productType: selectedProductType,
      priceRange: range,
      customPriceMin: minPrice,
      customPriceMax: maxPrice,
    });
  };

  const handleCustomPriceSubmit = () => {
    onFilterChange({
      productType: selectedProductType,
      priceRange: "custom",
      customPriceMin: minPrice,
      customPriceMax: maxPrice,
    });
  };

  const productsIcon = (
    <svg
      width={14}
      height={13}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1812 7.15C10.706 7.15 11.1679 6.8835 11.4058 6.4805L13.9108 2.262C14.1697 1.833 13.8339 1.3 13.3021 1.3H2.94591L2.28815 0H0V1.3H1.39948L3.91855 6.2335L2.9739 7.8195C2.46309 8.6905 3.13484 9.75 4.19844 9.75H12.5953V8.45H4.19844L4.96816 7.15H10.1812ZM3.61066 2.6H12.1125L10.1812 5.85H5.26904L3.61066 2.6ZM4.19844 10.4C3.42873 10.4 2.80596 10.985 2.80596 11.7C2.80596 12.415 3.42873 13 4.19844 13C4.96816 13 5.59792 12.415 5.59792 11.7C5.59792 10.985 4.96816 10.4 4.19844 10.4ZM11.1958 10.4C10.4261 10.4 9.80336 10.985 9.80336 11.7C9.80336 12.415 10.4261 13 11.1958 13C11.9656 13 12.5953 12.415 12.5953 11.7C12.5953 10.985 11.9656 10.4 11.1958 10.4Z"
        fill="#444444"
      />
    </svg>
  );

  const priceIcon = (
    <svg
      width={9}
      height={14}
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.79 4.33333C7.65067 3.95683 7.39621 3.62864 7.05939 3.39102C6.72256 3.1534 6.31878 3.01722 5.9 3H3.1C2.54305 3 2.0089 3.21071 1.61508 3.58579C1.22125 3.96086 1 4.46957 1 5C1 5.53043 1.22125 6.03914 1.61508 6.41421C2.0089 6.78929 2.54305 7 3.1 7H5.9C6.45695 7 6.9911 7.21071 7.38492 7.58579C7.77875 7.96086 8 8.46957 8 9C8 9.53043 7.77875 10.0391 7.38492 10.4142C6.9911 10.7893 6.45695 11 5.9 11H3.1C2.68122 10.9828 2.27744 10.8466 1.94061 10.609C1.60379 10.3714 1.34933 10.0432 1.21 9.66667"
        stroke="#444444"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 1V3M4.5 11V13"
        stroke="#444444"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="w-[18.25rem] rounded-[0.625rem] bg-[#f6f6f6] overflow-hidden">
      <div className="w-full h-px bg-[#e7e7e9]"></div>

      <div className="flex justify-between items-center px-4 py-3">
        <h2 className="text-[#444] font-['Poppins'] text-[.9375rem] font-medium uppercase">
          Filters
        </h2>
        <svg
          width={14}
          height={8}
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.666667C0 0.489856 0.0921874 0.320287 0.256282 0.195262C0.420376 0.070238 0.642936 0 0.875 0H13.125C13.3571 0 13.5796 0.070238 13.7437 0.195262C13.9078 0.320287 14 0.489856 14 0.666667C14 0.843478 13.9078 1.01305 13.7437 1.13807C13.5796 1.2631 13.3571 1.33333 13.125 1.33333H0.875C0.642936 1.33333 0.420376 1.2631 0.256282 1.13807C0.0921874 1.01305 0 0.843478 0 0.666667ZM1.75 4C1.75 3.82319 1.84219 3.65362 2.00628 3.5286C2.17038 3.40357 2.39294 3.33333 2.625 3.33333H11.375C11.6071 3.33333 11.8296 3.40357 11.9937 3.5286C12.1578 3.65362 12.25 3.82319 12.25 4C12.25 4.17681 12.1578 4.34638 11.9937 4.4714C11.8296 4.59643 11.6071 4.66667 11.375 4.66667H2.625C2.39294 4.66667 2.17038 4.59643 2.00628 4.4714C1.84219 4.34638 1.75 4.17681 1.75 4ZM3.5 7.33333C3.5 7.15652 3.59219 6.98695 3.75628 6.86193C3.92038 6.7369 4.14294 6.66667 4.375 6.66667H9.625C9.85706 6.66667 10.0796 6.7369 10.2437 6.86193C10.4078 6.98695 10.5 7.15652 10.5 7.33333C10.5 7.51014 10.4078 7.67971 10.2437 7.80474C10.0796 7.92976 9.85706 8 9.625 8H4.375C4.14294 8 3.92038 7.92976 3.75628 7.80474C3.59219 7.67971 3.5 7.51014 3.5 7.33333Z"
            fill="#444444"
          />
        </svg>
      </div>

      <FilterSection title="Products" icon={productsIcon} defaultExpanded={true}>
        <FilterButtonGroup
          options={productOptions}
          selectedValue={selectedProductType}
          onChange={handleProductTypeSelect}
        />
      </FilterSection>

      <FilterSection title="Price" icon={priceIcon} defaultExpanded={true}>
        <FilterButtonGroup
          options={priceRangeOptions}
          selectedValue={selectedPriceRange}
          onChange={handlePriceRangeSelect}
        />
        
        <PriceRangeInput
          minValue={minPrice}
          maxValue={maxPrice}
          onMinChange={setMinPrice}
          onMaxChange={setMaxPrice}
          onSubmit={handleCustomPriceSubmit}
        />
      </FilterSection>
    </div>
  );
};

export default FilterDropdown;