import { useEffect, useState } from "react";

export default function Caption({ caption }) {
  const [invisableMoreButton, setInvisableMoreButton] = useState(false);
  const [expandDesc, setExpandDesc] = useState(false);

  useEffect(() => {
    setInvisableMoreButton(caption.length > 200 ? true : false);
  }, []);

  function toggleDesc() {
    setExpandDesc((prevValue) => !prevValue);
  }

  return (
    <div
      className={`${
        expandDesc ? "h-auto" : "max-h-50"
      }relative flex overflow-y-hidden my-2`}
    >
      <h1>
        {caption.substring(
          0,
          caption.length < 200
            ? caption.length
            : expandDesc
            ? caption.length
            : 200
        )}
        {!expandDesc && caption.length < 200 ? (
          ""
        ) : (
          <button
            onClick={toggleDesc}
            className={`${
              invisableMoreButton ? "block" : "hidden"
            }  inline-block text-red-700  bottom-0 right-0`}
          >
            {expandDesc ? "less" : ".....more"}
          </button>
        )}
      </h1>
    </div>
  );
}
