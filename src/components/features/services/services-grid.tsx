import React from "react";
import ServiceCard, { ServiceCardProps } from "./service-card";

interface ServicesGridProps {
  services: ServiceCardProps[];
  itemsPerRow: number;
}

const ServicesGrid: React.FC<ServicesGridProps> = (props) => {
  return (
    <div className="w-full py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {props.services.map((service, index) => (
          <div key={service.id || index} className="w-full">
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
