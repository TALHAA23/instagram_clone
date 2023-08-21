import { useEffect, useState } from "react";

export default function PostDescription() {
  const [invisableMoreButton, setInvisableMoreButton] = useState(false);
  const [expandDesc, setExpandDesc] = useState(false);
  const desc = `The quick brown fox jumps over the lazy dog" 
  is an English-language pangram – a sentence that contains all 
  the letters of the alphabet -- The quick brown fox jumps over the lazy dog" 
  is an English-language pangram – a sentence that contains all 
  the letters of the alphabet`;

  useEffect(() => {
    setInvisableMoreButton(desc.length > 200 ? true : false);
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
        {desc.substring(
          0,
          desc.length < 200 ? desc.length : expandDesc ? desc.length : 200
        )}
        {!expandDesc && desc.length < 200 ? (
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
