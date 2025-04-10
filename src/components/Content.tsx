import { Link } from "lucide-react";
import Del from "./icons/Del";
import SmallShare from "./icons/SmallShare";
import Youtube from "./icons/Youtube";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Twitter from "./icons/Twitter";
import { ReactElement, useState } from "react";
import CreateContentModal from "./CreateContentModal";
import { useStateContext } from "../hooks/useContextState";

interface ContentProp {
  text: string;
  link: string;
  type: "twitter" | "youtube";
}
const Logo: Record<string, ReactElement> = {
  twitter: <Twitter />,
  youtube: <Youtube />,
};
const Content = (props: ContentProp) => {
   const{open,setOpen}=useStateContext()
  return (
    <div className="w-72 relative min-w-72 flex flex-col rounded-xl shadow-md outline-slate-500 border-slate-300 overflow-hidden">
      {/* Header */}
      <CreateContentModal  open={open} CloseUp={setOpen}/>
      <div className="flex h-14 w-full items-center justify-between rounded-t-xl ">
        <div className="flex gap-2 w-full items-center ml-4">
          {Logo[props.type]}
          <div className="text-black flex leading-3.5 items-center text-base/tight  w-full  ">
            {props.text}
          </div>
        </div>
        <div className="flex gap-3 mr-4 items-center">
          <a href={props.link} target="_blank">
            <SmallShare />
          </a>
          <Del />
        </div>
      </div>

      {/* Embedded Content */}
      <div className="w-full p-2  ">
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
              placeholder="loading"
              tweetId={props.link.split("/").pop() || ""}
              options={{
                hideCard: false,
                hideThread: true,
                width: 300, // or remove for responsive width
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Content;
