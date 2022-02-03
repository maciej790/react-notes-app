import styled from "styled-components";
import { colors } from "../../style/variables";

export const Modal = styled.div`
  width: 80%;
  padding: 0 0 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.White};
  border: 1px solid ${colors.MainBlue};
  border-radius: 10px;
  position: fixed;
  z-index: 999;
  animation: slide-bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes slide-bottom {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100px);
    }
  }
`;

export const ModalCloseButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${colors.MainBlue};
  color: ${colors.White};
  font-size: 25px;
  border: none;
  outline: none;
  border-top-right-radius: 10px;
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const ModalForm = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const ModalLabel = styled.label`
  color: ${colors.GrayText};
  margin-top: 20px;
`;

export const ModalInput = styled.input`
  width: 80%;
  height: 20px;
  border: none;
  outline: none;
  text-align: center;
  border-bottom: 1px solid ${colors.Black};
  color: ${colors.GrayText};
  margin-top: 20px;
  font-size: 16px;

  ::placeholder {
    color: ${colors.GrayText};
    text-align: center;
  }
`;

export const ModalDescription = styled.textarea`
  width: 80%;
  height: 100px;
  border: 1px solid ${colors.Black};
  border-radius: 10px;
  outline: none;
  margin-top: 20px;
  text-align: center;
  color: ${colors.GrayText};
  padding: 10px;
  font-size: 16px;

  ::placeholder {
    color: ${colors.GrayText};
    text-align: center;
  }
`;

export const ModalSelect = styled.select`
  width: 80%;
  height: 40px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${colors.Black};
  color: ${colors.GrayText};
  margin: 20px 0 40px 0;
  text-align: center;
`;

export const Submit = styled.input`
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
