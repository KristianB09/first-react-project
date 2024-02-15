import { scryfallListContext } from "./context/scryfallListContext";
import Navbar from "./navbar/navbar.jsx";
import Card from "./getData/getData.jsx";
import CombineButtons from "./buttons/combineButtons.jsx";

function App() {
  return (
    <scryfallListContext.Provider value={[]}>
      <Navbar />
      <CombineButtons />
      <Card />
    </scryfallListContext.Provider>
  );
}

export default App;
