export default function Comment() {
  return (
    <div className="w-full flex items-start gap-2 my-1">
      <ProfilePicture />
      <div className="w-11/12">
        <CommentHead />
        <CommentText />
      </div>
    </div>
  );
}

function ProfilePicture() {
  return (
    <div className=" w-10 aspect-square rounded-full border border-black">
      <img
        className=" object-contain aspect-square"
        src="/instagram-text.png"
      />
    </div>
  );
}

function CommentHead() {
  return (
    <div>
      <span className="font-semibold">anAwsomeInstauser</span>
      <span className=" font-light ml-3 text-slate-600">123 w</span>
    </div>
  );
}

function CommentText({ text }) {
  return (
    <p>
      Hahhah this is an awsome commnet i see Hahhah this is an awsome commnet i
      see Hahhah this is an awsome commnet i see Hahhah this is an awsome
      commnet i see Hahhah this is an awsome commnet i see
    </p>
  );
}
