import { IconType } from "react-icons";

function Technologies(props: { technologie: string; icon: IconType }) {
  return (
    <span className="border text-[12px] border-black text-black rounded-2xl px-2 ">
      <span className="flex items-center justify-around gap-2">
        {<props.icon />} {props.technologie}
      </span>
    </span>
  );
}

export default Technologies;
