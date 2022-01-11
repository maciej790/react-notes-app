import styled from "styled-components";
import { colors } from "../../style/variables";

export const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: ${colors.White};
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

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

export const HeaderLogo = styled.p`
  color: ${colors.GrayText};
  font-weight: bold;
  font-size: 20px;
`;
