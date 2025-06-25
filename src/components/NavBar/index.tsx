import { use, useEffect, useRef, useState } from "react";
import useLogout from "./hooks/useLogout";
import useWithdraw from "./hooks/useWithdraw";

export default function NavBar() {
  const { mutate: useLogoutMutate } = useLogout();
  const { mutate: useWithdrawMutate } = useWithdraw();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    useLogoutMutate();
  };

  const handleWithdraw = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    setIsMenuOpen(false);

    const confirmed = window.confirm("정말 탈퇴하시겠습니까?");
    if (!confirmed) return;

    useWithdrawMutate();
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white relative">
      <div className="max-w-[920px] h-[62px] flex justify-between items-center mx-auto">
        <a className="w-6 h-6 ml-12.5 cursor-pointer" href="/">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="refrigerator">
              <path
                id="Vector"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.9999 5.7916e-05C4.59761 5.7916e-05 3.42847 1.11777 3.42847 2.53549V9.21606L3.47818 9.21434H20.5713V2.5372C20.5691 2.20176 20.5008 1.87006 20.3703 1.56101C20.2399 1.25197 20.0499 0.971649 19.8111 0.736052C19.5723 0.500455 19.2895 0.314198 18.9787 0.187916C18.6679 0.0616333 18.3353 -0.00220088 17.9999 5.7916e-05H5.9999ZM3.42847 19.3115V11.3572H20.5713V19.3115C20.5713 20.5801 19.6336 21.6103 18.4285 21.8109V22.7023C18.4285 23.0433 18.293 23.3704 18.0519 23.6115C17.8108 23.8526 17.4837 23.9881 17.1428 23.9881C16.8018 23.9881 16.4747 23.8526 16.2336 23.6115C15.9925 23.3704 15.857 23.0433 15.857 22.7023V21.8452H8.14275V22.7023C8.14275 23.0433 8.00729 23.3704 7.76618 23.6115C7.52506 23.8526 7.19803 23.9881 6.85704 23.9881C6.51605 23.9881 6.18902 23.8526 5.9479 23.6115C5.70678 23.3704 5.57132 23.0433 5.57132 22.7023V21.8109C4.97602 21.7155 4.43389 21.4119 4.04148 20.9542C3.64906 20.4965 3.43183 19.9144 3.42847 19.3115ZM8.64161 4.47263C8.64161 4.18847 8.52873 3.91595 8.3278 3.71501C8.12686 3.51408 7.85434 3.4012 7.57018 3.4012C7.28602 3.4012 7.0135 3.51408 6.81257 3.71501C6.61163 3.91595 6.49875 4.18847 6.49875 4.47263V5.32977C6.49875 5.61393 6.61163 5.88645 6.81257 6.08739C7.0135 6.28832 7.28602 6.4012 7.57018 6.4012C7.85434 6.4012 8.12686 6.28832 8.3278 6.08739C8.52873 5.88645 8.64161 5.61393 8.64161 5.32977V4.47263Z"
                fill="#D1D1D1"
              />
            </g>
          </svg>
        </a>
        <div className="mr-12.5 relative" ref={menuRef}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow z-[9999]">
              <a
                href="/recipe"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                추천 레시피 보기
              </a>
              <a
                className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleLogout}
                href="#"
              >
                로그아웃
              </a>
              <a
                className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-red-100"
                onClick={handleWithdraw}
                href="#"
              >
                회원 탈퇴
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
