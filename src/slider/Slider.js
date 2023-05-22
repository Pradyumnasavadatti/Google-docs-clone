import React from "react";
import Calender from "../resources/googleCalender.png";
import Keep from "../resources/Keep.png";
import Tasks from "../resources/tasks.png";
import Contacts from "../resources/contacts.png";
import Maps from "../resources/maps.png";
import { AiOutlinePlus } from "react-icons/ai";
import { useCon } from "../context/Context";
export default function Slider() {
  const refs = useCon();
  let appColor = [
    "rgba(255,0,0,0.5)",
    "rgba(255,255,0,0.5)",
    "rgba(0,0,255,0.5)",
    "rgba(255,0,255,0.5)",
    "rgba(0,255,0,0.5)",
  ];
  function initSlide() {
    refs.removeToolbarIcon();
    refs.compressHeader();
    refs.slideLeft();
    refs.compressToolbar();
    refs.compressEditor();
    refs.moveSliderLeft();
  }
  return (
    <div
      style={{ transition: "all 1s" }}
      ref={refs.sliderContext}
      className="right-0 absolute flex flex-col justify-evenly items-center w-[4vw] h-[60vh] top-[10vh]"
    >
      <div
        onClick={() => {
          refs.setAppSelected(0);
          refs.fireEventCircleUp(appColor[0]);
          initSlide();
        }}
        className="rounded-full p-3 flex justify-center items-center hover:hover:bg-[rgba(0,0,0,0.05)] cursor-pointer"
      >
        <img className="w-[1.5vmax] h-[1.5vmax]" src={Calender} />
      </div>
      <div
        onClick={() => {
          refs.setAppSelected(1);
          refs.fireEventCircleUp(appColor[1]);
          initSlide();
        }}
        className="rounded-full p-3 flex justify-center items-center hover:hover:bg-[rgba(0,0,0,0.05)] cursor-pointer"
      >
        <img className="w-[1vmax] h-[1.4vmax]" src={Keep} />
      </div>
      <div
        onClick={() => {
          refs.setAppSelected(2);
          refs.fireEventCircleUp(appColor[2]);
          initSlide();
        }}
        className="rounded-full p-3 flex justify-center items-center hover:hover:bg-[rgba(0,0,0,0.05)] cursor-pointer"
      >
        <img className="w-[1.5vmax] h-[1.5vmax]" src={Tasks} />
      </div>
      <div
        onClick={() => {
          refs.setAppSelected(3);
          refs.fireEventCircleUp(appColor[3]);
          initSlide();
        }}
        className="rounded-full p-3 flex justify-center items-center hover:hover:bg-[rgba(0,0,0,0.05)] cursor-pointer"
      >
        <img className="w-[1vmax] h-[1.2vmax]" src={Contacts} />
      </div>
      <div
        onClick={() => {
          refs.setAppSelected(4);
          refs.fireEventCircleUp(appColor[4]);
          initSlide();
        }}
        className="rounded-full p-3 flex justify-center items-center hover:hover:bg-[rgba(0,0,0,0.05)] cursor-pointer"
      >
        <img className="w-[1vmax] h-[1.5vmax]" src={Maps} />
      </div>
      <div className="w-[4vw] h-[15vh] flex justify-end items-center ">
        <div className="rounded-full p-3 flex justify-center items-center hover:bg-[rgba(0,0,0,0.05)] cursor-pointer">
          <AiOutlinePlus className="text-black text-xl " />
        </div>
      </div>
    </div>
  );
}
