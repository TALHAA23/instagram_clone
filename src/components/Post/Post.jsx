import PostHead from "./PostHead";
import ImageArea from "./ImageArea";
import PostUtils from "./PostUtils";
import CommentSection from "./CommentSection/CommentSection";
import { useLocation } from "react-router-dom";
export default function Post() {
  const { state } = useLocation();
  return (
    <div className="relative md:h-[80vh] max-w-[1100px] my-16 border border-yellow-600 flex gap-2 justify-between">
      <div className="hidden md:block border border-gray-800">
        <ImageArea src={state.url} />
      </div>
      <div className="w-full  flex flex-col border border-gray-800">
        <PostHead />
        <div className="md:hidden">
          <ImageArea src={state.url} />
        </div>
        <CommentSection comments={state.comments} caption={state.caption} />
      </div>
    </div>
  );
}
