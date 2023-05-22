import React, { useRef, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineModeEdit } from "react-icons/md";

export default function Summary() {
  const [summary, setSummary] = useState("");
  const [flag, setFlag] = useState(true);
  const summaryRef = useRef();
  const summaryDiv = useRef();
  function updateSummary() {
    setFlag(true);
    setSummary(summaryRef.current.value);
    summaryRef.current.style.display = "none";
    summaryDiv.current.style.display = "block";
  }
  function summaryChange() {
    setFlag(false);
  }
  function showTextArea() {
    summaryRef.current.style.display = "block";
    summaryRef.current.focus();
    summaryDiv.current.style.display = "none";
  }
  return (
    <div className="w-[20%] h-[100%] flex flex-col justify-start items-center">
      <div className="w-full h-[10%] flex justify-start items-center">
        <IoArrowBackSharp className="text-2xl text-gray-600" />
      </div>
      <div className="w-full h-[7%] flex justify-between items-center">
        <p className="text-gray-500 text-xs">Summary</p>
        <div
          onClick={showTextArea}
          className="mr-2 rounded-full p-2 hover:bg-[rgba(0,0,0,0.1)] cursor-pointer"
        >
          {flag && summary == "" && (
            <AiOutlinePlus className="text-black text-base " />
          )}
          {flag && summary != "" && (
            <MdOutlineModeEdit className="text-black text-base " />
          )}
        </div>
      </div>
      <textarea
        size="100"
        maxLength={100}
        ref={summaryRef}
        onChange={summaryChange}
        onBlur={updateSummary}
        className="w-full p-2 mb-2 bg-transparent hidden text-slate-500 outline-blue-500 outline-solid overflow-hidden"
        placeholder="Enter your document summary here"
      />
      <div className="w-[20vw] mb-2 h-fit hidden break-all" ref={summaryDiv}>
        {summary}
      </div>

      <div className="w-full h-[0.05vmax] bg-slate-300"></div>
      <div className="w-full h-[10%] mt-3 flex justify-start items-center">
        <p className="text-gray-500 text-xs">Outline</p>
      </div>
      <div className="w-full h-[20%]">
        <p className="text-gray-500 text-sm">
          <i>Headings you add to the document will appear here.</i>
        </p>
      </div>
    </div>
  );
}
