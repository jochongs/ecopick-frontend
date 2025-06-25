import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const kakaoLoginBtnClick = () => {
    navigate("/main");
  };

  return (
    <div className="w-full max-w-[600px] mx-auto bg-[#F4F9F4] h-[100vh] flex flex-col items-center">
      <div className="w-26 h-26 mt-20">
        <img src="/src/assets/main-character.png" alt="" />
      </div>
      <div>
        <img className="h-5.5" src="/src/assets/logo.png" alt="" />
      </div>
      <div className="mt-3.5">
        <span>지구를 위한 현명한 선택, 에코픽과 함께하세요</span>
      </div>
      <div className="mt-19">
        <img className="" src="/src/assets/login-info.png" alt="" />
      </div>
      <div>
        <button
          onClick={kakaoLoginBtnClick}
          className="rounded-[10px] bg-[#FEE500] w-69.5 h-18 flex items-center justify-center mt-20"
        >
          <img className="w-11" src="/src/assets/kakao-login.png" alt="" />
          <span className="text-3xl ml-2.5">카카오로그인</span>
        </button>
      </div>
    </div>
  );
}
