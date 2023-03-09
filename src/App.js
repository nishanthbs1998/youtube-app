import "./App.css";
import Head from "./components/Head";
import SideMenu from "./components/SideMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

/**
 *
 * Header
 *  -3 sections
 *
 * Body
 *  -Button components
 *  -Video container
 *
 * Side Menu
 *
 *
 *
 *
 *
 */
