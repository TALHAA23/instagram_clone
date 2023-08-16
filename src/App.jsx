import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login, { action as loginAction } from "./pages/login-registration/Login";
import Registration, {
  action as registrationAction,
} from "./pages/login-registration/Registration";
import HomeLayout from "./components/HomeLayout";
import Profile, { loader as profileLoader } from "./pages/Profile/Profile";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomeLayout />}>
          <Route
            path=":username"
            element={<Profile />}
            loader={profileLoader}
          />
        </Route>
        <Route path="/login" element={<Login />} action={loginAction} />
        <Route
          path="/registration"
          element={<Registration />}
          action={registrationAction}
        />
      </>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;
