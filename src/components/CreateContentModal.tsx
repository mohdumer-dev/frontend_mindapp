import { ReactEventHandler, useContext, useState } from "react";
import Close from "./icons/Close";
import { useStateContext } from "../hooks/useContextState";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Tag from "../components/icons/Tag";

const CreateContentModal = ({
  open,
  CloseUp,
}: {
  open: boolean;
  CloseUp: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const URL = import.meta.env.VITE_BACK;
  const { setOpen } = useStateContext();
  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [input, setInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const data = useMutation({
    mutationFn: async () => {
      const reponse = await axios.post(`${URL}/create`, {
        title: title,
        link: link,
      });
      return reponse;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
  function handleArray() {
    if (input.trim() !== "") {
      setTags((x) => {
        const update = [...x, input.trim()];
        return update;
      });
      setInput("");
    }
  }

  function Submit() {
    data.mutate();
    setTitle("");
    setLink("");
    setOpen(false);
  }
  return (
    <div>
      {open && (
        <div className="w-screen h-screen fixed top-0 right-0 bg-black/70 flex justify-center items-center">
          <div className="flex flex-col   w-80 rounded-2xl overflow-hidden h-96 bg-white ">
            <div className="w-full  flex h-12 items-center justify-end mt-2  ">
              <div className="cursor-pointer" onClick={() => CloseUp(!open)}>
                <Close />
              </div>
            </div>
            <div className=" mt-6 w-full flex flex-col justify-between items-center  h-full ">
              <div className="flex flex-col items-center w-full gap-2">
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
                <div className=" flex gap-4 items-center">
                  <label htmlFor="type" className="  font-medium">
                    Select:
                  </label>
                  <select
                    id="type"
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    className="border  rounded p-1 w-full"
                  >
                    <option value="" disabled>
                      Type
                    </option>
                    <option value="youtube">Youtube</option>
                    <option value="twitter">Twitter</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="Enter Tags"
                    value={input}
                    onChange={(e) =>
                      setInput(e.target.value.replace(/\s/g, ""))
                    }
                    className="px-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleArray}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                  >
                    +
                  </button>
                </div>
                {tags && (
                  <div className="w-[90%] flex items-center flex-wrap gap-2 overflow-y-auto h-16 scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-gray-400">
                    {tags.map((x, index) => (
                      <Tag key={index} text={`${x}`} />
                    ))}
                  </div>
                )}
              </div>
              <div className="mb-3 ">
                <button
                  onClick={Submit}
                  className="bg-gray-300 cursor-pointer overflow-hidden hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
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
