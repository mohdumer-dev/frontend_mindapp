import React, { useContext } from "react";
import { Share, X } from "lucide-react"; // optional icon lib
import { useStateContext } from "../hooks/useContextState";
import ShareContent from "../hooks/Share";



const ShareBrainModal: React.FC= () => {
  const { setShareTab, shareTab } = useStateContext();
  const{mutateAsync}=ShareContent()
async function Click(){
   const data=await mutateAsync()
   await navigator.clipboard.writeText(data)
}
  return (
    <>
      {shareTab && (
        <div className="w-screen z-10 h-screen fixed top-0 right-0 bg-black/70 flex justify-center items-center">
          <div className="w-[420px] rounded-xl bg-white p-8 shadow-xl text-gray-800">
            {/* Header */}
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-semibold">Share Your Second Brain</h2>
              <button
                className="text-gray-500 cursor-pointer hover:text-gray-700"
                onClick={() => {
                  setShareTab(false);
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4">
              Share your entire collection of notes, documents, tweets, and
              videos with others. They'll be able to import your content into
              their own Second Brain.
            </p>

            {/* Share Button */}
            <button
              onClick={Click}
              className="w-full bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white font-medium py-2 rounded-lg flex justify-center items-center gap-2"
            >
            <Share/>
              Share Brain
            </button>

            {/* Footer */}
            <p className="text-xs text-gray-400 text-center mt-3">
              All your brain will be shared
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareBrainModal;
