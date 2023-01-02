import styled from "styled-components";

export const Container = styled("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`;

export const StyledInput = styled("input")`
  font-size: 17px;
  background: transparent;
  border-bottom: 1px solid #fff;
  border-radius: 0;
  padding-bottom: 18px;
  color: #fff;

  &:focus {
    outline: none;
    -webkit-box-shadow: none;
  box-shadow: none;
  }
`;
