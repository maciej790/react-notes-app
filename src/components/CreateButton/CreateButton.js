/* eslint-disable react/prop-types */
import { Button } from "./StyledCreateButton";

function CreateButton({ slideModal, value }) {
  return <Button onClick={slideModal}>{value}</Button>;
}

export default CreateButton;
