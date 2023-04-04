import { Select } from "@chakra-ui/react";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { StyledSelect } from "./styles";

interface FilterProps {
  placeHolder?: string;
  options?: any;
  selectedParam?: any;
}

export const Filter = ({
  placeHolder,
  options,
  selectedParam,
}: FilterProps) => {
  // console.log(options);
  let [searchParams, setSearchParams] = useSearchParams();

  const optionChangeHandler = (e: any) => {
    let author = e.target.value;
    if (author) {
      searchParams.set("author", author);
      setSearchParams(searchParams);
    }
  };
  return (
    <Select
      placeholder={placeHolder}
      color={"#8694B9"}
      bg="white"
      cursor={"pointer"}
      w={"160px"}
      onChange={optionChangeHandler}
    >
      {!!options &&
        !!options.length &&
        options.map((option: any, idx: any) => (
          <option
            key={idx}
            selected={option.slug === selectedParam}
            value={option?.slug}
          >
            {option?.name}
          </option>
        ))}
    </Select>
  );
};
