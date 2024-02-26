import Navbar from "./navbar/navbar.jsx";
import Card from "./getData/getData.jsx";
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
      <CombineButtons />
      <RouterProvider router={router} />
    </main>
  );
}

export default App;