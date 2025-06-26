interface Props {
  isOpen?: boolean;
  onClose: () => void;
}

export default function CouponDialog({ isOpen, onClose }: Props) {
  return (
    <>
      {isOpen ? (
        <div
          className="absolute top-0 w-screen h-screen flex justify-center items-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
          onClick={onClose}
        >
          <div
            className="w-84 h-101.5 bg-white rounded-[10px] fix flex flex-col items-center"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h4 className="font-bold text-[18px] mt-6">1,000원 할인 쿠폰</h4>
            <div className="w-46.5 h-46.5 bg-[#E8F5E9] rounded-[10px] flex justify-center items-center mt-8"></div>
            <span className="font-medium text-[18px] text-[#676767] mt-7">
              실천가게에서 QR코드를 제시해 주세요.
            </span>
            <button className="mt-7 w-63.5 h-11 rounded-[10px] text-white text-[20px] bg-[#3A915F]">
              확인
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
