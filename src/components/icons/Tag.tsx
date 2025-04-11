import React from "react";

interface Props {
  text: string;
}

const Tag: React.FC<Props> = ({ text }) => {
  return (
    <span className="bg-blue-100 text-blue-600 text-sm m-[1px] px-2 py-1 rounded-xl w-fit shadow-sm">
      {text}
    </span>
  );
};

export default Tag;