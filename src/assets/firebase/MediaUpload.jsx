import { useState } from "react";
import { storage } from "./firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export default function UploadMedia() {
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  console.log(progresspercent);

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];

    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgresspercent(progress);
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="file" />
      <button type="submit">Submit</button>
    </form>
  );
}
