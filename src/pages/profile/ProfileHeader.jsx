import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function ProfileHead() {
  return (
    <div className="relative h-[50vh] space-y-4 w-full py-6 px-3 sm:px-10 mt-10 sm:mt-0">
      <ProfileHeadImgAndSummary />
      <StatusBar />
      <div
        className="absolute bottom-0 w-[90%] py-4 px-10 text-center sm:invisible flex justify-between
        border-t-2 border-black dark:border-white
        "
      >
        {[
          ["posts", 0],
          ["followings", 0],
          ["followers", 0],
        ].map(([title, count]) => (
          <SmallScreenAccountSummary title={title} count={count} />
        ))}
      </div>
    </div>
  );
}

function ProfileHeadImgAndSummary() {
  return (
    <div className="flex  gap-5">
      <div className=" w-28 sm:w-36 lg:mx-20 aspect-square flex justify-center items-center rounded-full border border-slate-600">
        <img src="/instagram-text.png" alt="dfsdf" className="w-full" />
      </div>
      <div>
        <div className="h-full flex flex-col justify-around">
          <div className="space-y-3 sm:space-x-3">
            <span className="font-semibold text-lg">talhasifat23</span>
            <br className="sm:hidden" />
            <Button text="Edit profile" />
            <Button text="View archive" />
            <FontAwesomeIcon icon={faGear} size="lg" />
          </div>
          <div className="hidden sm:flex justify-between">
            {[
              ["posts", 0],
              ["followings", 0],
              ["followers", 0],
            ].map(([title, count]) => (
              <MediumAndAboveAccountSummary title={title} count={count} />
            ))}
          </div>
          <div className="font-semibold">i am tlaha 😍</div>
        </div>
      </div>
    </div>
  );
}

function SmallScreenAccountSummary({ title, count }) {
  return (
    <div>
      <p className="text-md text-slate-600 font-semibold">{count}</p>{" "}
      <div>{title}</div>{" "}
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

function Status() {
  return (
    <div className=" w-16 aspect-square rounded-full border border-white"></div>
  );
}

function StatusBar() {
  return (
    <div className="flex gap-2">
      <Status />
      <Status />
      <Status />
    </div>
  );
}
