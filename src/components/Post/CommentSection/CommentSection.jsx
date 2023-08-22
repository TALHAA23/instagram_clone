import { useState } from "react";
import Caption from "../PostCaption";
import Comment from "./Comment";

export default function CommentSection({ comments, caption }) {
  const [showCommentSection, setShowCommentSection] = useState(false);
  function toggleCommentSection() {
    setShowCommentSection((prevValue) => !prevValue);
  }
  return (
    <div className="md:grow text-sm border border-black dark:border-white">
      <div className="md:hidden">
        <Caption caption={caption} />
      </div>

      <ViewAllComments toggleCommentSection={toggleCommentSection} />

      <div
        className={`h-4/5 w-full px-2 overflow-y-scroll bg-white dark:bg-black
        absolute z-10 bottom-0 transition-transform md:relative md:scale-100 md:h-full 
        scale-x-${showCommentSection ? "100" : "0"} `}
      >
        <div className="hidden md:block">
          <Caption caption={caption} />
        </div>

        <button onClick={() => setShowCommentSection(false)}>
          hide comments
        </button>

        <div>
          {comments?.map((comment) => (
            <Comment text={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ViewAllComments({ toggleCommentSection }) {
  return (
    <div onClick={toggleCommentSection} className="md:hidden cursor-pointer">
      view all 5 comments
    </div>
  );
}
