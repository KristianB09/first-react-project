import { CardsProvider } from "./context/paginationContext.jsx";
import Navbar from "./navbar/navbar.jsx";
import Card from "./Cards/Cards.jsx";
import SetsPage from "./setsPage/setsPage.jsx";
import CombineButtons from "./buttons/combineButtons.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Card />,
  },
  {
    path: "/sets",
    element: <SetsPage />,
  },
]);

function App() {
  return (
    <main>
      <Navbar />
      <CardsProvider>
        <CombineButtons />
        <RouterProvider router={router} />
      </CardsProvider>
    </main>
  );
}

export default App;
