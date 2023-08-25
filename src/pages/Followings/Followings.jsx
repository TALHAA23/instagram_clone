import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPen } from "@fortawesome/free-solid-svg-icons";
import { uploadMedia } from "../../assets/firebase/utils";
import { useState, useRef, useEffect } from "react";
import StatusBar from "../../components/StatusBar";
import Progressbar from "../../components/ProgressBar";
import { useUser } from "../../hooks/UserProvider";

export default function Followings() {
  const dialogBoxRef = useRef();
  const [progress, setProgrss] = useState(false);
  const [isMediaSelected, setIsMediaSelected] = useState(false);
  const email = useUser()?.email;

  function handlePostUpload(event) {
    event.preventDefault();
    dialogBoxRef.current.close();
    const file = event.target[0]?.files[0];
    const caption = event.target[2]?.value;
    const uploadTask = uploadMedia(`${email}/posts`, file, caption);
    uploadTask.on("state_changed", (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgrss(progress);
    });
  }

  useEffect(() => {
    if (progress == 100) setTimeout(() => setProgrss(false), 2000);
  }, [progress]);

  useEffect(() => {
    dialogBoxRef.current.onclick = (event) => {
      const dialogBoxDimension = dialogBoxRef.current.getBoundingClientRect();
      if (
        event.clientX < dialogBoxDimension.left ||
        event.clientX > dialogBoxDimension.right ||
        event.clientY < dialogBoxDimension.top ||
        event.clientY > dialogBoxDimension.bottom
      ) {
        dialogBoxRef.current.close();
      }
    };
  }, []);

  return (
    <div>
      <dialog
        ref={dialogBoxRef}
        className="w-4/5 sm:w-[400px] rounded dark:bg-[#262626] dark:text-white"
      >
        <form onSubmit={(e) => handlePostUpload(e)}>
          <div className="relative h-[70vh] flex flex-col justify-between px-2 py-1">
            <CreatePost_Header />
            <CreateInputArea changeMediaSrc={setIsMediaSelected} />
            <button
              className={`peer ${
                isMediaSelected
                  ? "pointer-events-auto"
                  : "pointer-events-none opacity-50"
              }`}
              type="button"
            >
              Next
            </button>
            <CreateCaption />
          </div>
        </form>
      </dialog>
      <StatusBar />
      {progress && <Progressbar currentValue={progress} />}
    </div>
  );
}

function CreateCaption() {
  return (
    <div
      className="absolute h-[99%] w-[98%] scale-y-0 hover:scale-y-100 transition origin-top
          flex flex-col justify-center gap-2 bg-white dark:bg-[#262626] dark:text-white
         peer-hover:scale-y-100"
    >
      <FontAwesomeIcon icon={faPen} size="3x" />
      <textarea
        className="dark:text-white dark:bg-inherit border border-slate-700 rounded text-sm resize-none"
        name=""
        placeholder="Write caption for your post"
      ></textarea>
      <button type="submit">Submit</button>
    </div>
  );
}

function CreatePost_Header() {
  return <h1 className="text-center border-b-2">Create New Post</h1>;
}

function CreateInputArea({ changeMediaSrc }) {
  return (
    <>
      <input
        type="file"
        name="file"
        id="file"
        required
        hidden
        onChange={() => changeMediaSrc(true)}
      />
      <div className="flex flex-col gap-2">
        <FontAwesomeIcon icon={faImage} size="6x" />
        <label
          htmlFor="file"
          className="text-sm sm:text-md w-auto bg-[#0095f6] text-white rounded px-3 py-1 text-center"
        >
          Select From Your Computer
        </label>
      </div>
    </>
  );
}
