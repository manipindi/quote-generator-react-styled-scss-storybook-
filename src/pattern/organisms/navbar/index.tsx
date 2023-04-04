import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AxiosInstance } from "../../../utils/axios-istance";
import { useAxios } from "../../../utils/hooks";
import { Filter } from "../../molecules/select";
import { NavContainer } from "./styles";

export default function Navbar() {

  const [searchParams, setSearchParams] = useSearchParams();
  let page = 1;

  const { data: authorResponse }: any = useAxios(`/authors?page=${page}`);
  const authorParam = searchParams.get("author")  
  
  return (
    <NavContainer>
      <Filter placeHolder="Author" selectedParam={authorParam} options = {authorResponse?.results}/>
    </NavContainer>
  );
}
