import { BorderlessButton } from "../Buttons.jsx/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
export default function PostHead() {
  return (
    <div className="flex gap-3 items-center px-2 h-14">
      <Image />
      <TextUsername />
      <BorderlessButton text="Follow" />
      <FontAwesomeIcon icon={faEllipsis} className="ml-auto" />
    </div>
  );
}

function TextUsername() {
  return <h3>theInstgramusername</h3>;
}

function Image() {
  return (
    <div className="w-10 rounded-full border border-black">
      <img className="object-contain aspect-square" src="/instagram-text.png" />
    </div>
  );
}
