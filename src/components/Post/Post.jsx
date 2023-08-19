import PostHead from "./PostHead";
import ImageArea from "./ImageArea";
import PostUtils from "./PostUtils";
export default function Post() {
  return (
    <div className="md:h-[80vh] max-w-[1100px] my-16 border border-yellow-600 flex gap-2 justify-between">
      <div className="hidden md:block border border-gray-800">
        <ImageArea />
      </div>
      <div className="w-full md:w-1/2 flex flex-col border border-gray-800">
        <PostHead /> {/* head */}
        <div className="md:hidden">
          <ImageArea /> {/* img */}
        </div>
        <DummyCommentArea /> {/* comments: absoulte */}
        <PostUtils /> {/* utlies */}
      </div>
    </div>
  );
}

function DummyCommentArea() {
  return <div className="hidden md:block overflow-y-scroll grow"></div>;
}
