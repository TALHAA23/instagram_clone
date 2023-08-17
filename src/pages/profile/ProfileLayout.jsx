import { Outlet } from "react-router-dom";
import { useAccountInfoAndUpdater } from "../../hooks/AccountProvider";
import ProfileNavigation from "./ProfileNavigation";
import { defer, redirect, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import { getAccountByEmail } from "../../assets/firebase/utils";
import ProfileTop from "./ProfileTop";

export async function loader({ params, request }) {
  const { useremail } = params;
  const redirectParam = new URL(request.url).searchParams.get("redirect");
  if (redirectParam) throw redirect(redirectParam);
  const userAccountPromise = getAccountByEmail(useremail);
  return defer({ userAccountPromise });
}

export default function ProfileLayout() {
  const dataPromise = useLoaderData();

  function renderProfile(accountInfo) {
    const { updateAccountInfo } = useAccountInfoAndUpdater();
    updateAccountInfo(accountInfo[0]);
    return (
      <>
        <ProfileTop />
        <div>
          <ProfileNavigation />
          <Outlet />
        </div>
      </>
    );
  }

  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={dataPromise.userAccountPromise}>{renderProfile}</Await>
      </Suspense>
    </div>
  );
}
