import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import { tabsLoader } from "./loader/tabsLoader";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/*" element={<Layout />} loader={tabsLoader} />
    )
  );

  return <RouterProvider basename="/cms/" router={router} />;
};

export default App;
