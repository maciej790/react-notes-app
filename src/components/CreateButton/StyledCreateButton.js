import styled from "styled-components";
import { colors } from "../../style/variables";

export const Button = styled.button`
  width: 40%;
  height: 50px;
  background: ${colors.GreenButton};
  border: none;
  outline: none;
  border-radius: 10px;
  color: ${colors.White};
  font-weight: bold;
  font-size: 16px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
