import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

export default function PostUtils() {
  const utils = [faHeart, faComment, faPaperPlane, faBookmark];

  return (
    <div className="w-full flex gap-3 justify-normal">
      {utils.map((util) => (
        <FontAwesomeIcon icon={util} size="xl" className="last:ml-auto" />
      ))}
    </div>
  );
}
