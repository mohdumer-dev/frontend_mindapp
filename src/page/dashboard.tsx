import { useEffect } from "react";
import { Button } from "../components/Button";
import Content, { ContentProp } from "../components/Content";
import CreateContentModal from "../components/CreateContentModal";
import Document from "../components/icons/Document";
import Hash from "../components/icons/Hash";
import Link from "../components/icons/Link";
import Loading from "../components/icons/Loading";
import Plus from "../components/icons/Plus";
import Share from "../components/icons/Share";
import Twitter from "../components/icons/Twitter";
import Youtube from "../components/icons/Youtube";
import ShareBrainModal from "../components/Share";
import SideBar from "../components/SideBar";
import useContent from "../hooks/Content";
import ShareContent from "../hooks/Share";
import { useStateContext } from "../hooks/useContextState";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const { open, setOpen, shareTab, setShareTab } = useStateContext();
  const { data, isLoading } = useContent();
  if (!data) return;

  return (
    <div className="h-screen relative w-screen">
      {/* create content */}

      <div className="flex relative  h-full w-full ">
        {/* Side bar */}
        <div className="md:w-72 sm:w-52  hidden h-full sm:flex flex-col    shadow-md">
          {/* Top name */}

          <div className="w-full h-12  ">Mind Notes</div>
          {/* Create Content Modal */}

          <div className=" mt-12 gap-3 flex flex-col items-center">
            <SideBar text="Twitter" icon={<Twitter />} />
            <SideBar text="Youtube" icon={<Youtube />} />
            <SideBar text="Link" icon={<Link />} />
            <SideBar text="Tags" icon={<Hash />} />
            <SideBar text="Document" icon={<Document />} />
          </div>
        </div>
        {/* Main Arae */}
        <div className="flex flex-col h-full w-full">
          <CreateContentModal open={open} CloseUp={setOpen} />
          <ShareBrainModal />
          {/* Top Notch Area */}
          <div className="w-full h-12  flex justify-between items-center gap-5 transpa">
            <span className="text-sm  md:text-2xl text-center md:mt-3  md:w-24   text-black font-mono ml-2 ">
              All Notes
            </span>
            <div className="flex md:gap-5 gap-1 md:mr-2">
              <Button
                startIcon={<Share size="sm" />}
                text=" Share Content"
                size="sm"
                varaint="secondary"
                onClick={() => {
                  setShareTab(!shareTab);
                }}
              />

              <Button
                startIcon={<Plus size="sm" />}
                text="Create Content"
                size="sm"
                varaint="primary"
                onClick={() => {
                  setOpen((prev) => !prev);
                }}
              />
            </div>
          </div>

          {/* Elemnet */}
          <div className="h-full w-full overflow-y-scroll p-4">
            <div className="mt-4 ml-5 gap-4 flex justify-start flex-wrap max-w-full items-start">
              {isLoading ? (
                <Loading />
              ) : (
                data?.map((x: ContentProp, index: number) => (
                  <Content
                    tags={x.tags}
                    _id={x._id}
                    key={index}
                    title={x.title}
                    link={x.link}
                    type={x.type as "youtube" | "twitter"}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
