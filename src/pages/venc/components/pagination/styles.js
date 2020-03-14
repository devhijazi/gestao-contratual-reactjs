import styled from "styled-components";

export const Button = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  opacity: 0.8;
  background-color: #66a182;
  transition: all 300ms;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5 !important;
  }
  :not(:last-child) {
    margin-right: 18px;
  }
  :hover {
    opacity: 1;
  }
`;
