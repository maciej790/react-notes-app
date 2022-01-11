import styled from "styled-components";
import { colors } from "../../style/variables";

export const Ratings = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 320px;
`;

export const Currency = styled.div`
  width: 40%;
  height: 100px;
  background-color: ${colors.White};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: -4px 0px 24px 0px rgba(66, 68, 90, 1);
`;

export const CurrencyCode = styled.div`
  width: 50%;
  height: 80px;
  border-right: 2px solid ${colors.MainBlue};
  color: ${colors.GrayText};
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CurrencyValue = styled.div`
  width: 100%;
  height: 80px;
  color: ${colors.Black};
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
