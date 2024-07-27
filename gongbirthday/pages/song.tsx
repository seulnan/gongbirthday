import React, { useEffect, useState } from "react";
import Bar from "../components/Bar";
import YouTube from "react-youtube";
import Confetti from "react-confetti";

const Song: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000); // 3초 후에 폭죽 효과 종료

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  const handleSongClick = () => {
    // 아무것도 하지 않음, Bar에서 처리
  };

  return (
    <div className="wrapper">
      {showConfetti && <Confetti />}
      <span className="title py-20">🎶 Song</span>
      <Bar /> {/* Bar 컴포넌트에 onSongClick 전달 */}
      <YouTube
        videoId="AWrXKyFzg0o"
        opts={{
          width: "560",
          height: "315",
          playerVars: { autoplay: 1, rel: 0, modestbranding: 1 },
        }}
      />
    </div>
  );
};

export default Song;
