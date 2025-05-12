import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ViewPaste from "./Components/ViewPaste";
import Nav from './Components/Navbar';
import Home from './Components/Home';
import Paste from './Components/Paste';
import Favourite from "./Components/Favourite";
import { Container } from "react-bootstrap";
import NoFound from "./Components/NoFound";
import Footer from "./Components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <Nav />
        <Home />
        <Footer />
      </div>
  },
  {
    path: "/pastes",
    element:
      <div>
        <Nav />
        <Paste />
        <Footer />
      </div>
  },
  {
    path: "/pastes/:id",
    element:
      <div>
        <Nav />
        <ViewPaste />
        <Footer />
      </div>
  },
  {
    path: "/favourite",
    element:
      <div>
        <Nav />
        <Favourite />
        <Footer />
      </div>
  },
  {
    path: "/favourite/:id",
    element:
      <div>
        <Nav />
        <ViewPaste />
        <Footer />
      </div>
  },
  {
    path: "*",
    element: <NoFound />
  }
])

function App() {

  return (
    <Container className="vw-100 m-0 p-0 d-flex jusitfy-content-center">
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
