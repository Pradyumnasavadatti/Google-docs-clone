import React from "react";
import { useCon } from "../context/Context";
import { RxCross1 } from "react-icons/rx";

export default function GApps() {
  const refs = useCon();

  let appArray = ["Calender", "Keep", "Tasks", "Contacts", "Maps"];

  function slideRight() {
    refs.expandHeader();
    refs.slideRight();
    refs.showToolbarIcon();
    refs.expandToolbar();
    refs.fireEventCircleDown();
    refs.expandEditor();
    refs.moveSliderRight();
  }

  return (
    <div
      style={{ transition: "all 1s" }}
      ref={refs.googleAppContext}
      className="overflow-hidden flex flex-col justify-center items-center absolute w-[20vw] h-[100vh] top-0 right-[-20vw]"
    >
      <div className="w-full h-[10%] flex justify-end items-center mr-2">
        <div
          onClick={slideRight}
          className="p-2 hover:bg-slate-100 rounded-full cursor-pointer"
        >
          <RxCross1 />
        </div>
      </div>
      <div className="w-full h-[90%]  flex justify-center items-center text-5xl">
        {appArray[refs.appSelected]}
      </div>
      <div
        ref={refs.circleContext}
        className="absolute w-[2vmax] h-[2vmax] rounded-full circle"
      ></div>
    </div>
  );
}
