import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import UserProvider from "./hooks/UserProvider";
import AccountProvider from "./hooks/AccountProvider";

import Login, { action as loginAction } from "./pages/login-registration/Login";
import Registration, {
  action as registrationAction,
} from "./pages/login-registration/Registration";

import HomeLayout from "./components/HomeLayout";
import ProfileLayout, {
  loader as profileLayoutLoader,
} from "./pages/profile/ProfileLayout";
import ProfilePosts from "./pages/Profile/ProfilePosts";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomeLayout />}>
          <Route
            path=":useremail"
            element={<ProfileLayout />}
            loader={profileLayoutLoader}
          >
            <Route index element={<ProfilePosts />} />
            <Route path="saved" element={<h1>Saves Goes Here</h1>} />
            <Route path="tagged" element={<h1>Tages Goes Here</h1>} />
          </Route>
          <Route path="explore" element={<h1>Explore section</h1>} />
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

  return (
    <UserProvider>
      <AccountProvider>
        <RouterProvider router={routes} />;
      </AccountProvider>
    </UserProvider>
  );
}

export default App;
