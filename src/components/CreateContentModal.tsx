import { ReactEventHandler, useContext, useState } from "react";
import Close from "./icons/Close";
import { useStateContext } from "../hooks/useContextState";

const CreateContentModal = ({
  open,
  CloseUp,
}: {
  open: boolean;
  CloseUp: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setOpen } = useStateContext();
  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");
  function Submit() {
    console.log("Title is ", title, " and the link is ", link);
    setTitle("");
    setLink("");
    setOpen(false);
  }
  return (
    <div>
      {open && (
        <div className="w-screen h-screen fixed top-0 right-0 bg-black/70 flex justify-center items-center">
          <div className="flex flex-col   w-80 rounded-2xl overflow-hidden h-72 bg-white ">
            <div className="w-full  flex h-12 items-center justify-end mt-2  ">
              <div className="cursor-pointer" onClick={() => CloseUp(!open)}>
                <Close />
              </div>
            </div>
            <div className=" mt-6 w-full flex flex-col justify-between items-center  h-full ">
              <div className="flex flex-col items-center w-full gap-5">
                <input
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  className="w-9/10 h-8 rounded-xs shadow-2xl p-2 border-2 border-sky-200 focus:outline-blue-200 "
                />
                <input
                  value={link}
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                  type="text"
                  name="link"
                  id="link"
                  placeholder="Link"
                  className="w-9/10 h-8 rounded-xs shadow-2xl p-2 border-2 border-sky-200 focus:outline-blue-200 "
                />
              </div>
              <div className="mb-6 ">
                <button
                  onClick={Submit}
                  className="bg-gray-300 cursor-pointer hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateContentModal;
