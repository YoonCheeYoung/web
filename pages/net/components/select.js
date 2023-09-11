import { Select } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

function DynamicSelect({ placeholder_text, options, onChange }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Select
      placeholder={placeholder_text}
      onChange={handleSelectChange}
      value={selectedValue}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}

export default DynamicSelect;
