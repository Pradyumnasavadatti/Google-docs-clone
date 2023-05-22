import React, { useRef, useState } from "react";
import Doc from "../resources/google-docs.png";
import { AiOutlineStar, AiFillCaretDown } from "react-icons/ai";
import {
  MdLockOutline,
  MdOutlineDriveFileMove,
  MdOutlineInsertComment,
} from "react-icons/md";
import { BsCloudCheck } from "react-icons/bs";
import { RxCountdownTimer } from "react-icons/rx";
import { BiVideo } from "react-icons/bi";
import { menu } from "../resources/menu";
import Logo from "../resources/mercor.jpg";
import { useCon } from "../context/Context";
export default function Header() {
  const refs = useCon();
  const [title, setTitle] = useState("Untitled document");
  const head = useRef();
  function changeText(event) {
    setTitle(head.current.value);
    if (event.nativeEvent.data == null) {
      if (head.current.size != 1) head.current.size--;
    } else {
      head.current.size++;
    }
  }
  function addTitle() {
    if (title == "") {
      setTitle("Untitled document");
      head.current.size = 16;
      document.title = "Untitle document - Google Docs";
    } else {
      document.title = title + " - Google Docs";
    }
    head.current.size =
      head.current.value.length == 0 ? 1 : head.current.value.length;
  }
  return (
    <div
      ref={refs.headerContext}
      style={{ transition: "all 1s" }}
      className="w-[100%] h-[10vh] flex justify-evenly align-middle items-center"
    >
      <div className="w-[73%] h-full flex justify-start items-center">
        <div className="w-[4vw] h-[90%] flex justify-center items-center">
          <img src={Doc} className="w-[70%] h-[60%] object-contain" />
        </div>
        <div className="w-[66%] h-[90%] flex flex-col justify-center items-center">
          <div className="w-[100%] h-[55%] flex justify-start items-center">
            <input
              type="text"
              value={title}
              ref={head}
              size="16"
              onBlur={addTitle}
              maxLength={30}
              onChange={changeText}
              className="w-fit h-fit ml-1 max-w-[70%] bg-transparent text-lg  rounded-sm border-0 hover:border-2 hover:border-solid hover:border-gray-500 focus:border-0 focus:outline-blue-500"
            />
            <div className="btnHover">
              <AiOutlineStar />
            </div>
            <div className="btnHover">
              <MdOutlineDriveFileMove />
            </div>
            <div className="btnHover">
              <BsCloudCheck />
            </div>
          </div>
          <div className="w-[100%] h-[35%] flex justify-start items-center">
            {menu.map((val) => {
              return (
                <div className="hover:bg-[rgba(0,0,0,0.05)] px-2 py-[0.2vmax] mr-1 rounded-[0.3vmax] cursor-pointer text-sm">
                  {val}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[25vw] h-[90%] flex justify-evenly items-center">
        <div className="btnHover" style={{ padding: "0.7vmax" }}>
          <RxCountdownTimer className="text-2xl" />
        </div>
        <div className="btnHover" style={{ padding: "0.7vmax" }}>
          <MdOutlineInsertComment className="text-2xl" />
        </div>
        <div
          className="btnHover"
          style={{ borderRadius: "1vmax", padding: "0.7vmax" }}
        >
          <div className="flex justify-evenly items-center">
            <BiVideo className="text-2xl" />
            <AiFillCaretDown className="ml-1 text-sm" />
          </div>
        </div>
        <div className="boxShadow cursor-pointer rounded-full flex justify-evenly items-center px-5 py-2.5 bg-[rgb(194,231,255)]">
          <MdLockOutline className="text-lg mr-2 " />
          <b className="text-[1.1vmax]">Share</b>
        </div>
        <img src={Logo} className="w-[3vmax] h-[3vmax] rounded-full" />
      </div>
    </div>
  );
}
