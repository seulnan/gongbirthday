import React, { useState } from "react";
import { useRouter } from "next/router";
import Confetti from "react-confetti";

const Bar: React.FC = () => {
  const router = useRouter();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSongClick = () => {
    setShowConfetti(true);
    router.push("/song");
    setTimeout(() => {
      setShowConfetti(false);
    }, 15000); // 3초 후에 폭죽 효과 종료 및 페이지 이동
  };

  return (
    <div className="w-full flex items-center px-10 font-kangwon-bold text-lg justify-evenly py-2">
      {showConfetti && <Confetti />}
      <div
        onClick={() => router.push("/")}
        className="px-4 py-2 flex items-center justify-center rounded-lg hover:cursor-pointer hover:bg-purple1/50 transition-all"
      >
        HBD
      </div>
      <div
        onClick={() => router.push("/gift")}
        className="px-4 py-2 flex items-center justify-center rounded-lg hover:cursor-pointer hover:bg-purple1/50 transition-all"
      >
        Letter
      </div>
      <div
        onClick={() => router.push("/photo")}
        className="px-4 py-2 flex items-center justify-center rounded-lg hover:cursor-pointer hover:bg-purple1/50 transition-all"
      >
        Photo
      </div>
      <div
        onClick={handleSongClick} // 폭죽 효과를 위한 클릭 이벤트
        className="px-4 py-2 flex items-center justify-center rounded-lg hover:cursor-pointer hover:bg-purple1/50 transition-all"
      >
        Song
      </div>
    </div>
  );
};

export default Bar;
