import React, { useState } from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { SlPrinter } from "react-icons/sl";
import {
  MdSpellcheck,
  MdFormatLineSpacing,
  MdChecklistRtl,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdMoreVert,
  MdLockOutline,
  MdColorize,
} from "react-icons/md";
import { TfiPaintRoller } from "react-icons/tfi";
import { BiMinus } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlinePlus, AiFillCaretDown } from "react-icons/ai";
import { BiItalic } from "react-icons/bi";
import { VscBold } from "react-icons/vsc";
import { MdFormatUnderlined, MdFormatColorText } from "react-icons/md";
import { FiLink2 } from "react-icons/fi";
import { BiCommentAdd, BiPencil, BiImageAlt } from "react-icons/bi";
import { BsTextLeft } from "react-icons/bs";
import { useCon } from "../context/Context";
export default function ToolBar() {
  const refs = useCon();
  const [flag, setFlag] = useState(true);
  function toggleHeader() {
    if (flag) {
      refs.removeHeader();
      refs.extraLargeEditor();
      refs.removeSlider();
      refs.expandMainEditor();
      setFlag(false);
    } else {
      refs.showHeader();
      refs.expandEditor();
      refs.showSlider();
      refs.compressMainEditor();
      setFlag(true);
    }
  }
  return (
    <div
      ref={refs.toolContext}
      style={{ transition: "all 1s" }}
      className="toolBar rounded-3xl overflow-hidden  w-[94%] h-fit ml-4 bg-[rgb(237,242,250)] flex justify-between items-center"
    >
      <div className="w-[85%]  h-[6vh] flex justify-evenly items-center">
        {!flag && (
          <input
            type="text"
            className="w-[20%] h-[4vh] rounded-xl text-black text-sm p-2 focus:outline-0 focus:shadow-md"
            placeholder="Search the menus"
          />
        )}
        <div className="toolBarHover">
          <RiArrowGoBackLine />
        </div>
        <div className="toolBarHover" style={{ transform: "rotateY(180deg)" }}>
          <RiArrowGoBackLine />
        </div>
        <div className="toolBarHover">
          <SlPrinter />
        </div>
        <div className="toolBarHover p-1">
          <MdSpellcheck className="text-lg" />
        </div>
        <div className="toolBarHover">
          <TfiPaintRoller />
        </div>
        <div className="toolBarHover p-1">
          <select className="bg-transparent text-slate-600">
            <option value="Fit">Fit</option>
            <option value="50%">50%</option>
            <option value="75%">75%</option>
            <option value="100%" selected>
              100%
            </option>
            <option value="125%">125%</option>
            <option value="150%">150%</option>
            <option value="200%">200%</option>
          </select>
        </div>
        <div className="w-[0.05vw] h-[3vh] bg-[rgba(0,0,0,0.2)]"></div>
        <div className="toolBarHover p-1">
          <select className="bg-transparent text-slate-600">
            <option>Normal text</option>
            <option>
              <title>Title</title>
            </option>
            <option>
              <p>Subtitle</p>
            </option>
            <option>
              <h1>Heading 1</h1>
            </option>
            <option>
              <h2>Heading 2</h2>
            </option>
            <option>
              <h3>Heading 3</h3>
            </option>
          </select>
        </div>
        <div className="w-[0.05vw] h-[3vh] bg-[rgba(0,0,0,0.2)]"></div>
        <div className="toolBarHover p-1">
          <select className="bg-transparent text-slate-600">
            <option value="Arial" selected>
              Arial
            </option>
            <option value="Calibri">Calibri</option>
            <option value="Cambria">Cambria</option>
            <option value="Vardana">Vardana</option>
          </select>
        </div>
        <div className="w-[0.05vw] h-[3vh] bg-[rgba(0,0,0,0.2)]"></div>
        <div className="w-[6vw] h-[4vh] flex justify-evenly items-center">
          <div className="toolBarHover p-1">
            <BiMinus />
          </div>
          <div className="toolBarHover p-1">
            <select name="fontSize" className="bg-transparent">
              <option value="8">8</option>
              <option>9</option>
              <option>10</option>
              <option selected>11</option>
              <option>12</option>
              <option>14</option>
              <option>18</option>
              <option>24</option>
              <option>30</option>
              <option>36</option>
              <option>48</option>
              <option>60</option>
              <option>72</option>
              <option>96</option>
            </select>
          </div>
          <div className="toolBarHover p-1">
            <AiOutlinePlus />
          </div>
        </div>
        <div className="w-[0.05vw] h-[3vh] bg-[rgba(0,0,0,0.2)]"></div>
        <div className="toolBarHover p-1">
          <VscBold className="text-lg" />
        </div>
        <div className="toolBarHover p-1">
          <BiItalic className="text-lg" />
        </div>
        <div className="toolBarHover p-1">
          <MdFormatUnderlined className="text-lg" />
        </div>
        <div className="toolBarHover p-1">
          <MdFormatColorText className="text-lg" />
        </div>
        <div className="toolBarHover p-1">
          <MdColorize className="text-lg" />
        </div>
        <div className="w-[0.05vw] h-[3vh] bg-[rgba(0,0,0,0.2)]"></div>
        {!flag && (
          <>
            <div className="toolBarHover p-1">
              <FiLink2 className="text-lg" />
            </div>
            <div className="toolBarHover p-1">
              <BiCommentAdd className="text-lg text-[rgba(0,0,0,0.3)]" />
            </div>
            <div className="toolBarHover p-1">
              <BiImageAlt className="text-lg" />
            </div>
            <div className="w-[0.05vw] h-[3vh] bg-[rgba(0,0,0,0.2)]"></div>
          </>
        )}

        {flag && (
          <div
            ref={refs.toolbarContext}
            className="w-[21vw] h-[6vh] flex justify-evenly items-center "
          >
            <div className="toolBarHover p-1">
              <FiLink2 className="text-lg" />
            </div>
            <div className="toolBarHover p-1">
              <BiCommentAdd className="text-lg text-[rgba(0,0,0,0.3)]" />
            </div>
            <div className="toolBarHover p-1">
              <BiImageAlt className="text-lg" />
            </div>
            <div className="w-[0.05vw] h-[3vh] bg-[rgba(0,0,0,0.2)]"></div>

            <div className="toolBarHover p-1">
              <BsTextLeft className="text-lg" />
            </div>
            <div className="toolBarHover p-1">
              <MdFormatLineSpacing className="text-lg" />
            </div>
            <div className="toolBarHover p-1">
              <MdChecklistRtl className="text-lg" />
            </div>
            <div className="toolBarHover p-1">
              <MdFormatListBulleted className="text-lg" />
            </div>
            <div className="toolBarHover p-1">
              <MdFormatListNumbered className="text-lg" />
            </div>
          </div>
        )}
        <div className="toolBarHover p-1">
          <MdMoreVert className="text-lg" />
        </div>
      </div>
      <div className="w-[10%] h-[6vh] flex justify-evenly items-center ">
        <div className="toolBarHover p-1 rounded-lg flex justify-center items-center">
          <BiPencil className="text-xl" />
          <AiFillCaretDown className="text-sm" />
        </div>
        <div className="w-[0.05vw] h-[3vh] bg-[rgba(0,0,0,0.2)]"></div>
        <div className="toolBarHover p-1" onClick={toggleHeader}>
          {flag && <IoIosArrowUp className="text-lg" />}
          {!flag && <IoIosArrowDown className="text-lg" />}
        </div>
      </div>
    </div>
  );
}
