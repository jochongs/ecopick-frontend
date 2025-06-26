import { cn } from "../../../util/cn";

interface Props {
  connected: boolean;
  imgSrc: string;
  name: string;
}

export default function CompanyCard({ connected, imgSrc, name }: Props) {
  return (
    <div
      className={cn(
        "w-full h-23 rounded-[15px]",
        connected ? "bg-[#E8F5E9]" : "",
      )}
    >
      <div className="flex">
        <div className="w-11 h-11 flex">
          <img className="w-full h-full" src={imgSrc} alt="" />
        </div>
        <div className="flex flex-col">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
}
