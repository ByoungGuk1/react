import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../pages/main/MainContainer";
import IntroContainer from "../pages/intro/IntroContainer";
import HobbyContainer from "../pages/hobby/HobbyContainer";

const router = createBrowserRouter([
  {
    path : "/",
    element : <MainContainer />,
  },
  {
    path : "/intro",
    element : <IntroContainer />,
  },
  {
    path : "/hobby",
    element : <HobbyContainer />,
  }
]);

export default router