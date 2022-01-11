/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  ModalCloseButton,
  Modal,
  ModalDescription,
  ModalForm,
  ModalInput,
  ModalLabel,
  ModalSelect,
  Submit,
} from "./StyledAppModal";
import { AiOutlineClose } from "react-icons/ai";

function AppModal({ slideModal }) {
  const [noteTitle, setnoteTitle] = useState("");
  const [noteDescription, setnoteDescription] = useState("");
  const [noteColor, setnoteColor] = useState("");

  return (
    <Modal>
      <ModalCloseButton onClick={slideModal}>
        <AiOutlineClose />
      </ModalCloseButton>
      <ModalForm>
        <ModalLabel htmlFor="title">Note title</ModalLabel>
        <ModalInput
          type="text"
          name="title"
          placeholder="e.g. work"
          value={noteTitle}
          onChange={(e) => setnoteTitle(e.target.value)}
        />
        <ModalLabel htmlFor="description">Note description</ModalLabel>
        <ModalDescription
          placeholder="e.g. fix bugs"
          value={noteDescription}
          onChange={(e) => setnoteDescription(e.target.value)}
        ></ModalDescription>
        <ModalLabel htmlFor="color">Choose note color</ModalLabel>
        <ModalSelect
          name="color"
          value={noteColor}
          onChange={(e) => setnoteColor(e.target.value)}
        >
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
        </ModalSelect>
        <Submit type="submit" value="Create" />
      </ModalForm>
    </Modal>
  );
}

export default AppModal;
