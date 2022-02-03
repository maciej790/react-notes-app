import { useState } from "react";
import AppBanner from "./components/AppBanner/AppBanner";
import AppHeader from "./components/AppHeader/AppHeader";
import AppModal from "./components/AppModal/AppModal";
import NotesDashboard from "./components/NotesDashboard.js/NotesDashboard";
import GlobalStyle from "./style/globalStyles";
import { Wrapper } from "./StyledWrapper";
import { useNotes } from "./use/useNotes";

function App() {
  const [isSlide, setisSlide] = useState(false);

  const slideModal = () => setisSlide(!isSlide);

  const { saveNote, removeNote, notes } = useNotes();

  const saveNoteToLocalStorage = (note) => {
    saveNote(note);
  };

  const removeNoteFromLocalStorage = (id) => {
    removeNote(id);
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <AppHeader slideModal={slideModal} />
      {isSlide && (
        <AppModal
          slideModal={slideModal}
          saveNoteToLocalStorage={saveNoteToLocalStorage}
        />
      )}
      <AppBanner />
      <NotesDashboard notes={notes} handleRemove={removeNoteFromLocalStorage} />
    </Wrapper>
  );
}

export default App;
