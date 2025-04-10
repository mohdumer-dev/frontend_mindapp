import { Button } from "./components/Button";
import Content from "./components/Content";
import Document from "./components/icons/Document";
import Hash from "./components/icons/Hash";
import Link from "./components/icons/Link";
import Plus from "./components/icons/Plus";
import Share from "./components/icons/Share";
import Twitter from "./components/icons/Twitter";
import Youtube from "./components/icons/Youtube";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex  h-full w-full ">
        {/* Side bar */}
        <div className="w-72 h-full flex flex-col   shadow-md">
          {/* Top name */}
          <div className="w-full h-12  ">Mind Notes</div>
          <div className=" mt-12 gap-3 flex flex-col items-center">
          <SideBar text="Twitter" icon={<Twitter/>}/>
          <SideBar text="Youtube" icon={<Youtube/>}/>
          <SideBar text="Link" icon={<Link/>}/>
          <SideBar text="Tags" icon={<Hash/>}/>
          <SideBar text='Document' icon={<Document/>}/>

          </div>
        </div>
        {/* Main Arae */}
        <div className="flex flex-col h-full w-full">
          {/* Top Notch Area */}
          <div className="w-full h-12  flex justify-between items-center gap-5">
            <span className="text-2xl text-black font-mono ml-2 ">
              All Notes
            </span>
            <div className="flex gap-5 mr-2">
              <Button
                startIcon={<Share size="sm" />}
                text=" Share Content"
                size="sm"
                varaint="secondary"
                onClick={() => {
                  console.log("Share Content Clicked");
                }}
              />

              <Button
                startIcon={<Plus size="sm" />}
                text="Create Content"
                size="sm"
                varaint="primary"
                onClick={() => {
                  console.log("Created Content Clicked");
                }}
              />
            </div>
          </div>

          {/* Elemnet */}
          <div className="h-full w-full overflow-y-scroll p-4">
            <div className="mt-4 ml-5 gap-4 flex justify-evenly flex-wrap max-w-full  min-h-full ">
              <Content text="1st " />
              <Content text="1st " />
              <Content text="1st " />
              <Content text="1st " />
              <Content text="1st " />
              <Content text="1st " />
              <Content text="1st " />
              <Content text="1st " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
