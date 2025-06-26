import { useEffect, useRef, useState } from "react";
import BottomTab from "../../components/BottomTab";
import useGetUserInfo from "./hooks/useGetUserInfo";

export default function MainPage() {
  const [fallback, setFallback] = useState(false);
  const checkRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const video = document.createElement("video");
      video.src = "/src/assets/video.mp4";
      video.muted = true;
      video.autoplay = true;
      video.playsInline = true;
      video.loop = true;
      video.style.display = "none";

      // DOM에 삽입 후 재생 시도
      if (checkRef.current) {
        checkRef.current.appendChild(video);

        video
          .play()
          .then(() => {
            setFallback(false);
            checkRef.current?.removeChild(video);
          })
          .catch((error) => {
            if (error.name === "NotAllowedError") {
              console.log("저전력 모드 또는 autoplay 차단 감지됨");
              setFallback(true);
              checkRef.current?.removeChild(video);
            } else {
              checkRef.current?.removeChild(video); // 오류 처리 후 정리
            }
          });
      }
    }, 3000); // 5초마다 검사

    return () => clearInterval(interval);
  }, []);

  const { data: user } = useGetUserInfo();

  return (
    <div className="w-full max-w-[600px] bg-[#F4F9F4] mx-auto h-screen flex flex-col justify-start items-center">
      <header className="h-16.5 bg-white flex items-center w-full border-b-1 border-[#EBEBEB]">
        <img className="w-25 ml-5.5" src="/src/assets/logo.png" alt="" />
      </header>
      <div ref={checkRef} style={{ display: "none" }} />
      <main className="flex-1 overflow-y-auto flex flex-col px-4.5 w-full relative pb-4">
        <h1 className="font-semibold text-base mt-4.5">
          ㅇㅇㅇ님, 오늘도 친환경 하루를 시작해요!
        </h1>
        <div className="bg-[#42A066] w-full h-51.5 rounded-[10px] mt-7.5 relative shrink-0">
          <h2 className="text-base font-semibold text-white mt-3.5 ml-4">
            나의 친환경 등급
          </h2>
          <div className="mt-1 text-base font-semibold text-white ml-4">
            <span className="text-[35px]">2</span> 등급
          </div>
          <div className="w-37 h-22 ml-5 relative">
            <img src="/src/assets/main-graph.png" alt="" />
            <span className="absolute text-[30px] bottom-1 left-[50%] text-white translate-x-[-54%]">
              2
            </span>
          </div>
          <div className="absolute top-3.5 right-4">
            <div className="w-28.5 h-18.5 flex items-center flex-col rounded-[10px] bg-[#58AF77]">
              <span className="text-white font-semibold text-[12px] mt-3.5">
                예상 탄소 감축량
              </span>
              <span className="text-white font-bold text-[20px] mt-1">
                12.4Kg
              </span>
            </div>
            <div className="w-28.5 h-18.5 flex items-center flex-col rounded-[10px] bg-[#58AF77] mt-3">
              <span className="text-white font-semibold text-[12px] mt-3.5">
                누적 실천 횟수
              </span>
              <span className="text-white font-bold text-[20px] mt-1">
                47회
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#FFC55B] w-full h-31 rounded-[10px] mt-3 relative shrink-0">
          <h2 className="text-base font-bold text-[20px] mt-3 ml-5 leading-6">
            나의 리워드
          </h2>
          <div className="flex">
            <div className="flex flex-col ml-8 mt-7">
              <span className="font-medium text-[12px] text-[#676767]">
                누적 포인트
              </span>
              <div className="relative">
                <span className="font-bold text-[20px]">3,450</span>
                <span className="absolute text-[#464646] text-[12px] top-0">
                  P
                </span>
              </div>
            </div>
            <div className="flex flex-col ml-8 mt-7">
              <span className="font-medium text-[12px] text-[#676767]">
                사용 가능 쿠폰
              </span>
              <div>
                <span className="font-bold text-[20px]">2</span>
                <span className="text-[#464646] text-[12px]"> 장</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[10px] w-full h-41 border-1 border-solid border-[#DFDFDF] bg-white mt-3 relative shrink-0">
          <h2 className="mt-4 ml-5 text-base font-bold text-[20px] leading-6">
            최근 실천 결과
          </h2>
          <span className="absolute top-4 right-5 text-[#676767] font-medium text-[12px]">
            오늘
          </span>
          <div className="w-full px-2.5 relative">
            <div className="flex w-full h-23.5 bg-[#F3F3F3] rounded-[10px] mt-3">
              <div className="w-12.5 h-12.5 mr-2.5 rounded-[20px] bg-white mt-5.5 ml-4 flex items-center justify-center">
                <img src="/src/assets/baemin-logo.png" alt="" />
              </div>
              <div>
                <div className="mt-5.5 w-41">
                  <span className="leading-4">
                    배달의 민족에서 다회용기 사용을 확인했어요!
                  </span>
                </div>
                <span className="text-[#676767] text-[12px]">
                  2025.06.24 12:30
                </span>
              </div>
              <div className="absolute top-10 right-7 font-bold text-[20px] text-[#419F65]">
                <span>+30</span>
                <span className="absolute top-0 right-[-8px] text-[12px]">
                  P
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full">
        <BottomTab />
      </footer>
    </div>
  );
}
