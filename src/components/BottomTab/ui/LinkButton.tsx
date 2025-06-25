import { useLocation } from "react-router-dom";
import type { SVG } from "../../../types/react";
import { cn } from "../../../util/cn";

interface Props {
  DefaultIcon: SVG;
  FilledIcon: SVG;
  href: string;
  name: string;
  deactivated: boolean;
}

export default function LinkButton({
  DefaultIcon,
  FilledIcon,
  href,
  name,
}: Props) {
  const { pathname } = useLocation();
  const deactivated = pathname !== href;

  return (
    <li className="flex-1">
      <a href={href} className="flex flex-col items-center justify-center">
        {deactivated ? <DefaultIcon /> : <FilledIcon />}
        <span
          className={cn(
            "text-[12px] font-medium",
            deactivated ? "text-[#676767]" : "text-[#3A915F]",
          )}
        >
          {name}
        </span>
      </a>
    </li>
  );
}
