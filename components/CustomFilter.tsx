import React from "react";

interface CustomFilterProps {
  title: string;
}

const CustomFilter = ({ title }: CustomFilterProps) => {
  return (
    <div className="custom-filter">
      {title}
    </div>
  );
};

export default CustomFilter;
