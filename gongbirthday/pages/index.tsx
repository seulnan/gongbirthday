import React from "react";
import Image from "next/image";
import Bar from "../components/Bar";
import { useRouter } from "next/router";

const mediaData = [
  {
    type: "image",
    src: "/images/image1.jpg",
    date: "2023-01-01",
    comment:
      "최근에 내 공연와줬을때! 내 인생 속 중요한 순간들에 함께 있어줘서 고마워",
  },
  {
    type: "image",
    src: "/images/image3.jpg",
    date: "2024-06-05",
    comment: "열심히 공부하는 경민이",
  },
  {
    type: "image",
    src: "/images/image2.jpg",
    date: " ",
    comment: "아구 이뻐라",
  },
  {
    type: "image",
    src: "/images/image4.jpg",
    date: "2020-04-??",
    comment:
      "와 유물ㅋㅋㅋ발견ㄷㄷ 이때 우리 셋이 벚꽃구경하고 파인만가고 그랬는데",
  },
  {
    type: "image",
    src: "/images/image6.jpg",
    date: "2020-10-27",
    comment: "내 생일기념으로 지히랑 예린이랑 한강 간 날 너무 재밌었어",
  },
  {
    type: "image",
    src: "/images/image5.jpg",
    date: " ",
    comment: "귀엽다 우리 둘이",
  },
  {
    type: "image",
    src: "/images/image7.jpg",
    date: "2019-05-??",
    comment: "ㅋㅋㅋㅋㅋㅋ고1 체육대회때ㅠㅠㅠ둘다 풋풋하구만",
  },
  {
    type: "image",
    src: "/images/image8.jpg",
    date: "2024-01-19",
    comment: "난 너랑 여행할때가 제일 재밌는것같아 진짜로",
  },
  {
    type: "image",
    src: "/images/image9.jpg",
    date: "2024-01-04",
    comment: "ㅋㅋㅋㅋㅋㅋㅋㅋ이거왤케 숏다리처럼 나왔어 너무 귀여워",
  },
  {
    type: "image",
    src: "/images/image10.jpg",
    date: "  ",
    comment:
      "이때 너 정강이 제대로 박아서 거의 울었잖아ㅋㅋㅋ아니근데 첫번째컷 내가 너 먹는거 왤케 웃기냐",
  },
  {
    type: "image",
    src: "/images/image11.jpg",
    date: "2023-12-29",
    comment: "오모 이 이쁜이 누구야~?~?~?~?",
  },
  {
    type: "image",
    src: "/images/image12.jpg",
    date: "2023-11-16",
    comment:
      "항상 내 인생의 하이라이트에 같이 있어줘서 너무 고마워 진짜 내 인생에서 경민이는 나한테 가장 소중한 선물이야",
  },
  {
    type: "image",
    src: "/images/image13.jpg",
    date: "2023-06-02",
    comment:
      "우리 학교 놀러왔을때! 근데 너가 막 유나랑 호건이랑 잘지내는거보면 되게 기분 이상해 ㅎㅎㅎ",
  },
  {
    type: "image",
    src: "/images/image14.jpg",
    date: "눈알근접샷모음",
    comment: "   ",
  },
  {
    type: "image",
    src: "/images/image18.jpg",
    date: "  ",
    comment: "   ",
  },
  {
    type: "image",
    src: "/images/image19.jpg",
    date: "  ",
    comment: "   ",
  },
  {
    type: "image",
    src: "/images/image15.jpg",
    date: "2023-05-13",
    comment:
      "너가 막 나한테 학원들어가기전에 그래도 한번 둘이 여행가야지 이랬을때 은근 감동이었음 뭔가 나랑 같이 하고싶은게 많은거 같아서 히히 나도 너에게 특별한 존재가 되는 기분ㅎㅎㅎ",
  },
  {
    type: "image",
    src: "/images/image20.jpg",
    date: "2023-03-18",
    comment: "우리 넷 진짜 징글징글하다 너무 귀여워",
  },
  {
    type: "image",
    src: "/images/image23.jpg",
    date: "2023-01-12",
    comment:
      "ㅋㅋㅋㅋㅋㅋ위 사진이랑 다른때임 진짜 생각보다 자주안만나는데 지낸 세월이 너무 길어서 추억이 많은게 ㄹㅇ웃포인트",
  },
  {
    type: "image",
    src: "/images/image21.jpg",
    date: "2023-02-17",
    comment:
      "여기 셋도 징글징글하네;;ㅋㅋㅋㅋ아 과학학원그때가 진짜 맨날 숨넘어갈것처럼 웃고 그랬는데ㅠㅠㅠㅠ너무 그립다 진짜로",
  },
  {
    type: "image",
    src: "/images/image22.jpg",
    date: "2023-02-08",
    comment:
      "아니ㅋㅋㅋ누구를 만나도 어디에든 내옆에 공경민은 다 있는거 실화야?진짜로?ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ진짜 너랑 나랑 계속 붙어다니긴했나봐",
  },
  {
    type: "image",
    src: "/images/image25.jpg",
    date: "2022-12-25",
    comment:
      "25일에 싸이콘갔다가 우리둘다 아침에 알바출근한 미친날...우리는 진짜 모든 패턴을 다 공유했구나",
  },
  {
    type: "image",
    src: "/images/image24.jpg",
    date: "",
    comment:
      "근데 나 좀 받아주지 그랬냐;들이대는데 바로 무시하는거봐ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ아오",
  },
  {
    type: "image",
    src: "/images/image26.jpg",
    date: "",
    comment:
      "아니 이거 왤케 귀여움 우리 둘다? 진짜 우리는 모든걸 다 공유했구나 진짜 어떻게 안싸우고 지냈지?ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ신기하네 약간 싸운것도 일방적으로 너가 나를 혼낸거임 싸운게아님ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ",
  },
  {
    type: "image",
    src: "/images/image27.jpg",
    date: "2022-12-21",
    comment:
      "이건 우리둘다 처음 코엑스로 트램펄린 타러갔을때..쓰다보니 눈물남 진짜 우리는 모든걸 같이 했네 진짜로",
  },
  {
    type: "image",
    src: "/images/image28.jpg",
    date: "  ",
    comment: "김난슬이랑 인생네컷지분 1위의 위엄",
  },
  {
    type: "image",
    src: "/images/image29.jpg",
    date: "2022-01-02",
    comment:
      "이것도 지히예린이랑 넷이서 만났을때 찍은건데 우리둘다 풋풋해서 넣어봄ㅎㅎㅎㅎ귀엽다",
  },
  {
    type: "video",
    src: "/videos/video1.mp4",
    date: "2023-05-14",
    comment: "우리 너무 귀여운것같아",
  },
  {
    type: "video",
    src: "/videos/video2.mp4",
    date: "2024-01-19",
    comment:
      "공경민리포터! 근데 저 영상에서 나랑 너 목소리가 행복뿜뿜임 진짜 너는 나한테 너무 소중한 존재인듯",
  },
  {
    type: "video",
    src: "/videos/video3.mp4",
    date: "2024-01-04",
    comment: "연초파티에서 벌칙으로 픽션부르는 경민이",
  },
  {
    type: "video",
    src: "/videos/video4.mp4",
    date: "  ",
    comment: "소설!!!!소설!!!!!!소설!!!!!!",
  },
  {
    type: "video",
    src: "/videos/video5.mp4",
    date: "2023-02-17",
    comment:
      "마무리는 김난슬주특기 브이로그와 공경민주특기 카메라들이밀면 얼굴가리기로;;;;",
  },
  // 더 많은 사진과 영상 데이터를 추가하세요
];

const Index = () => {
  const router = useRouter();
  return (
    <div className="wrapper relative">
      <span className="title py-20">🎉공경민 생일 축하합니다🎉</span>
      <Bar />
      <div className="media-container pt-20 space-y-10">
        {mediaData.map((media, index) => (
          <div key={index} className="media-item flex flex-col items-center">
            <span className="font-kangwon-bold pt-4">{media.date}</span>
            {media.type === "image" ? (
              <Image
                src={media.src}
                alt={`image-${index}`}
                width="500"
                height="650"
              />
            ) : (
              <video src={media.src} controls width="500" />
            )}
            <span className="font-kangwon-bold pt-4">{media.comment}</span>
          </div>
        ))}
      </div>
      <span className="font-kangwon-bold pt-4">
        경민아 생일 너무너무 축하해🫶 바빠서 갤러리 대충 털었는데도 애초에 너랑
        지낸 세월, 너랑 함께한 게 너무 많아서 스크롤 장난아니게 해야할듯ㅋㅋㅋ
      </span>
    </div>
  );
};

export default Index;
