import React, { useCallback, useRef, useState } from "react";
import Bar from "../components/Bar";
import Webcam from "react-webcam";

const Photo = () => {
  const webcamRef = useRef<any>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [downloadLink, setDownloadLink] = useState<string | undefined>("");

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);

      if (imageSrc) {
        // Convert base64 to Blob
        const byteString = atob(imageSrc.split(",")[1]);
        const mimeString = imageSrc.split(",")[0].split(":")[1].split(";")[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });

        // Create a download link
        const url = URL.createObjectURL(blob);
        setDownloadLink(url);
      }
    }
  }, [webcamRef, setImgSrc, setDownloadLink]);

  return (
    <div className="wrapper">
      <span className="title py-20">📷Photo</span>
      <Bar />
      <div className="py-10 flex flex-col items-center space-y-4">
        <span className="font-kangwon-bold text-lg">
          생일 기념 사진을 찍어보세요! (사진은 우클릭으로 저장 가능합니다.)
        </span>
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        <button
          className="w-[150px] h-[70px] bg-purple1 rounded-xl text-white text-2xl font-kangwon-bold"
          onClick={capture}
        >
          📷 찰칵!
        </button>
        {imgSrc && (
          <div className="flex flex-col items-center space-y-4">
            <span className="font-kangwon-bold text-xl pt-4">
              2024. 7. 27. 경민 생일 기념🎉
            </span>
            <a
              href={downloadLink}
              download="photo.jpg"
              className="w-[150px] h-[70px] bg-purple-500 rounded-xl text-white text-2xl font-kangwon-bold flex items-center justify-center"
            >
              사진 저장
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Photo;
