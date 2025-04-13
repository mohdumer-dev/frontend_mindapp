import { Link } from "lucide-react";
import Del from "./icons/Del";
import SmallShare from "./icons/SmallShare";
import Youtube from "./icons/Youtube";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Twitter from "./icons/Twitter";
import { ReactElement } from "react";
import { useStateContext } from "../hooks/useContextState";
import useDelete from "../hooks/Delete";
import useContent from "../hooks/Content";
import Tag from "./icons/Tag";

export interface ContentProp {
  title: string;
  link: string;
  type: "twitter" | "youtube";
  _id: string;
  tags: { title: string[] };
}

const Logo: Record<string, ReactElement> = {
  twitter: <Twitter />,
  youtube: <Youtube />,
};

const Content = (props: ContentProp) => {
  const { refetch } = useContent();
  console.log(props.link.split('/').pop());

  function UserDelete() {
    useDelete(props._id);
    refetch();
  }

  return (
    <div className="w-72 relative min-w-72 flex flex-col rounded-xl shadow-md border border-slate-300 overflow-hidden">
      
      {/* Fixed Header */}
      <div className="flex h-14 w-full items-center justify-between px-4 bg-white">
        <div className="flex gap-2 items-center w-full">
          {Logo[props.type]}
          <div className="text-black text-base font-medium truncate w-full">
            {props.title}
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <SmallShare />
          </a>
          <span onClick={UserDelete} className="cursor-pointer">
            <Del />
          </span>
        </div>
      </div>

      {/* Embedded Content (Flexible Height) */}
      <div className="w-full max-h-64 overflow-y-auto p-2 bg-gray-50">
        {props.type === "youtube" ? (
          <iframe
            className="w-full h-48 rounded-lg"
            src={props.link?.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        ) : null}

        {props.type === "twitter" ? (
          <div className="flex justify-center">
            <TwitterTweetEmbed
              placeholder={"Loading ..."}
              tweetId={props.link.split("/").pop() || ""}
              options={{
                hideCard: false,
                hideThread: true,
                width: 300,
              }}
            />
          </div>
        ) : null}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-1 px-2 py-2 bg-white">
        {props.tags.title.map((x: string, index: number) => (
          <Tag key={index} text={`${x}`} />
        ))}
      </div>
    </div>
  );
};

export default Content;
