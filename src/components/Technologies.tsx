import { IconType } from "react-icons";

function Technologies(props: { technologie: string; icon: IconType }) {
  return (
    <span className="border-2 text-[12px] font-bold border-white text-white rounded-2xl px-2 ">
      <span className="flex items-center justify-around gap-2">
        {<props.icon size={13} />} {props.technologie}
      </span>
    </span>
  );
}

export default Technologies;
