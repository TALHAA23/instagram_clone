import { uploadMedia } from "../../assets/firebase/utils";
import { useState, useRef, useEffect } from "react";
import StatusBar from "../../components/StatusBar";
import Progressbar from "../../components/ProgressBar";

export default function Followings() {
  const dialogBoxRef = useRef();
  const [progress, setProgrss] = useState(false);
  function handlePostUpload(event) {
    event.preventDefault();
    const file = event.target[0]?.files[0];
    const uploadTask = uploadMedia(file);
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
      <dialog ref={dialogBoxRef} className="border-[2px] border-green-700">
        <form onSubmit={(e) => handlePostUpload(e)}>
          <div className="w-[400px] min-h-max">
            <h1>Create New Post</h1>
            <input type="file" name="file" id="file" hidden />
            <label htmlFor="file">Select From Your Computer</label>
            <button type="submit">Submit</button>
          </div>
        </form>
      </dialog>
      <StatusBar />
      {progress && <Progressbar currentValue={progress} />}
    </div>
  );
}
