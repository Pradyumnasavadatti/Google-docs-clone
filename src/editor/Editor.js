import React, { useCallback, useState } from "react";
import ToolBar from "./ToolBar";
import Summary from "./Summary";
import Quill from "quill";
import { useCon } from "../context/Context";
export default function Editor() {
  const refs = useCon();
  const [editorQuill, setEditorQuill] = useState();

  const editor = useCallback((element) => {
    if (element == null) return;
    element.innerHTML = "";
    let tempEditor = document.createElement("div");
    element.append(tempEditor);
    let quill = new Quill(tempEditor, {
      theme: "snow",
      modules: {
        toolbar: "",
        // toolbar: TOOLBAR_OPTIONS,
      },
    });
    setEditorQuill(quill);
  }, []);
  return (
    <div ref={refs.editorMainContext} className="w-full h-[90vh]">
      <div className="w-full h-[10%] flex justify-start items-center ">
        <ToolBar />
      </div>
      <div className="w-full h-[90%] flex justify-start items-center ml-4">
        <Summary />
        <div
          style={{ transition: "all 1s" }}
          className="w-[74%] h-[100%] overflow-x-scroll editorContainer overflow-y-scroll "
          ref={refs.editorContext}
        >
          <div className="w-[98%] ml-[2%] h-fit">
            <div ref={editor}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
