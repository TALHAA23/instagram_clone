import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Buttons.jsx/Button";
import { useAccountInfoAndUpdater } from "../../hooks/AccountProvider";
import StatusBar from "../../components/StatusBar";
import { useUser } from "../../hooks/UserProvider";
import { useLocation } from "react-router-dom";
import { useAccountUtils } from "../../hooks/AccountUtilsProvider";
import { auth } from "../../assets/firebase/firebase";

export default function ProfileTop() {
  const location = useLocation().pathname.split("/")[1];
  const isMyAccount = location == useUser().uid ? true : false;
  const { accountInfo } = useAccountInfoAndUpdater();
  if (!accountInfo) return;
  const { posts, followers, followings } = accountInfo.summary;
  const summary = [
    ["posts", posts.length],
    ["followings", followings.length],
    ["followers", followers.length],
  ];
  const amIFollowingCurrentAccount = followers.find(
    (follower) => follower.followedBy == auth.currentUser.email
  )
    ? true
    : false;
  return (
    <div className="relative h-[50vh] space-y-4 w-full py-6 px-3 sm:px-10 mt-10 sm:mt-0">
      <ProfileHeadImgAndSummary
        isMyAccount={isMyAccount}
        amIFollowingCurrentAccount={amIFollowingCurrentAccount}
        about={accountInfo.about}
        summary={summary}
      />
      <StatusBar />
      <SmallScreenAccountSummary summary={summary} />
    </div>
  );
}

function ProfileHeadImgAndSummary({
  isMyAccount,
  about,
  summary,
  amIFollowingCurrentAccount,
}) {
  const [addNewFollowing, unFollowAccount] = useAccountUtils();
  return (
    <div className="flex  gap-5">
      <div className=" w-28 sm:w-36 lg:mx-20 aspect-square flex justify-center items-center rounded-full border border-slate-600">
        <img src="/instagram-text.png" alt="dfsdf" className="w-full" />
      </div>
      <div>
        <div className="h-full flex flex-col justify-around">
          <div className="space-y-3 sm:space-x-3">
            <span className="font-semibold text-lg">{about.username}</span>
            <br className="sm:hidden" />
            {[
              {
                authText: "Edit Profile",
                alterText: amIFollowingCurrentAccount ? "Following" : "Follow",
                authClickFunc: () => "nothing",
                alterClickFunc: amIFollowingCurrentAccount
                  ? unFollowAccount
                  : addNewFollowing,
              },
              {
                authText: "View Archive",
                alterText: "Message",
                authClickFunc: () => "Archice showing...",
                alterClickFunc: () => "Messaging...",
              },
            ].map((item) => {
              return (
                <Button
                  key={item.alterText}
                  text={`${isMyAccount ? item.authText : item.alterText}`}
                  onClickFunc={
                    isMyAccount ? item.authClickFunc : item.alterClickFunc
                  }
                />
              );
            })}
            {isMyAccount && <FontAwesomeIcon icon={faGear} size="lg" />}
          </div>
          <div className="hidden sm:flex justify-between">
            {summary.map(([title, count]) => (
              <MediumAndAboveAccountSummary
                key={title}
                title={title}
                count={count}
              />
            ))}
          </div>
          <div className="font-semibold">{about.username} 😍</div>
        </div>
      </div>
    </div>
  );
}

function SmallScreenAccountSummary({ summary }) {
  return (
    <div
      className="absolute bottom-0 w-[90%] py-4 px-10 text-center sm:invisible flex justify-between
    border-t-2 border-black dark:border-white
    "
    >
      {summary.map(([title, count]) => (
        <div key={title}>
          <p className="text-md text-slate-600 font-semibold">{count}</p>{" "}
          <div>{title}</div>{" "}
        </div>
      ))}
    </div>
  );
}

function MediumAndAboveAccountSummary({ title, count }) {
  return (
    <div>
      <span className="font-semibold">{count}</span> <span>{title}</span>
    </div>
  );
}
