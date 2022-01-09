/* eslint-disable react/prop-types */
import CreateButton from "../CreateButton/CreateButton";
import { Header, HeaderLogo } from "./StyledAppHeader";

function AppHeader({ slideModal }) {
  return (
    <Header>
      <CreateButton slideModal={slideModal} value="Create new note" />
      <HeaderLogo>Notes app!</HeaderLogo>
    </Header>
  );
}

export default AppHeader;
