import styled from "styled-components";
import { colors } from "../../style/variables";

export const Dashboard = styled.section`
  width: 100%;
  margin-top: 250px;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 53px 0px;
  grid-template-areas: ".";
  justify-items: center;
`;

export const NoteItem = styled.div`
  width: 90%;
  background-color: ${colors.White};
  border-radius: 10px;
  box-shadow: -2px 0px 15px 0px rgba(66, 68, 90, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoteHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 20px;
`;

export const RemoveNoteButton = styled.button`
  font-size: 30px;
  width: 60px;
  height: 60px;
  border: none;
  border-top-right-radius: 10px;
  background-color: ${colors.MainBlue};
  color: ${colors.White};
  font-weight: bold;
`;

export const NoteDescription = styled.div`
  text-align: justify;
  padding: 40px;
`;

export const NoteColor = styled.div`
  width: 80%;
  height: 15px;
  border-radius: 100px;
  background-color: ${(props) =>
    props.color === "green"
      ? colors.Green
      : props.color === "blue"
      ? colors.Blue
      : colors.Red};
`;
