/* eslint-disable react/prop-types */
import { Header, HeaderLogo, Button } from "./StyledAppHeader";

function AppHeader({ slideModal }) {
  return (
    <Header>
      <Button onClick={slideModal}>Create new note</Button>
      <HeaderLogo>Notes app!</HeaderLogo>
    </Header>
  );
}

export default AppHeader;
