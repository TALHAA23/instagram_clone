import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<h1>Hyyy</h1>} />
      </>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;
