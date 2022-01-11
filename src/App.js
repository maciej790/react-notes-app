import { useState } from "react";
import AppBanner from "./components/AppBanner/AppBanner";
import AppHeader from "./components/AppHeader/AppHeader";
import AppModal from "./components/AppModal/AppModal";
import GlobalStyle from "./style/globalStyles";
import { Wrapper } from "./StyledWrapper";

function App() {
  const [isSlide, setisSlide] = useState(false);

  const slideModal = () => setisSlide(!isSlide);

  return (
    <Wrapper>
      <GlobalStyle />
      <AppHeader slideModal={slideModal} />
      {isSlide && <AppModal slideModal={slideModal} />}
      <AppBanner />
    </Wrapper>
  );
}

export default App;
