import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const StyledReactPaginate = styled(ReactPaginate)`
  /* border: 1px solid red; */
  /* margin-top: 20px; */
  list-style-type: none;
  background-color: #fff;
  display: flex;
  color: #bbc4d3;
  border-radius: 8px;
  position: fixed;
  bottom: 20px;
  left: 50%;
transform: translateX(-50%);
  li {
    padding: 10px 20px;
    border: 0.4px solid gray;
    cursor: pointer;
    :hover{
      color: #035FB7;
    }
  }
  .selected {
    background-color: #035FB7;
    color: #fff;
    :hover{
      color: #fff;
    }
  }
  .previous.disabled {
    pointer-events: none;
  }
  .previous {
    border-radius: 10px 0px 0px 10px;
    cursor: pointer;
    :hover {
      color: #035FB7;
    }
  }

  .next.disabled {
    pointer-events: none;
  }
  .next {
    border-radius: 0 10px 10px 0;
    cursor: pointer;
    :hover {
      color: #035FB7;
    }
  }
`;
