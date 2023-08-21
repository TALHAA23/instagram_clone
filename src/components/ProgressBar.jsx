import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function Progressbar({ currentValue }) {
  console.log(currentValue);
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-full h-1 bg-gray-400 dark:bg-gray-600 my-4 rounded">
        <Progress currentValue={currentValue} />
      </div>
      <span className="text-sm">
        {currentValue < 100 ? (
          currentValue + "%"
        ) : (
          <FontAwesomeIcon icon={faCheck} />
        )}
      </span>
    </div>
  );
}

function Progress({ currentValue }) {
  return (
    <div
      className="absolute h-full bg-black dark:bg-white rounded"
      style={{ width: currentValue + "%" }}
    ></div>
  );
}
