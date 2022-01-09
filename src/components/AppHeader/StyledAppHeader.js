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

export const HeaderLogo = styled.p`
  color: ${colors.GrayText};
  font-weight: bold;
  font-size: 20px;
`;
