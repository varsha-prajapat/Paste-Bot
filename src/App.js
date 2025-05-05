import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ViewPaste from "./Components/ViewPaste";
import Navbars from './Components/Navbar';
import Home from './Components/Home';
import Paste from './Components/Paste';
import Favourite from "./Components/Favourite";
import { Container } from "react-bootstrap";
import NoFound from "./Components/NoFound";
import Footers from "./Components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <Navbars />
        <Home />
        <Footers />
      </div>
  },
  {
    path: "/pastes",
    element:
      <div>
        <Navbars />
        <Paste />
        <Footers />
      </div>
  },
  {
    path: "/pastes/:id",
    element:
      <div>
        <Navbars />
        <ViewPaste />
        <Footers />
      </div>
  },
  {
    path: "/favourite",
    element:
      <div>
        <Navbars />
        <Favourite />
        <Footers />
      </div>
  },
  {
    path: "*",
    element: <NoFound />
  }
])

function App() {

  return (
    <Container className="vw-100 m-0 p-0  d-flex jusitfy-content-center">
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
