import React, { createContext, useContext, useRef, useState } from "react";

const context = createContext();

export function useCon() {
  return useContext(context);
}

export default function Context({ children }) {
  const [appSelected, setAppSelected] = useState(0);

  const headerContext = useRef();
  const toolbarContext = useRef();
  const editorContext = useRef();
  const editorMainContext = useRef();
  const sliderContext = useRef();
  const circleContext = useRef();
  const googleAppContext = useRef();
  const toolContext = useRef();

  function compressHeader() {
    headerContext.current.style.width = "80%";
  }
  function expandHeader() {
    headerContext.current.style.width = "100%";
  }
  function removeHeader() {
    headerContext.current.style.display = "none";
  }
  function showHeader() {
    headerContext.current.style.display = "flex";
  }
  function removeToolbarIcon() {
    toolbarContext.current.style.display = "none";
  }
  function showToolbarIcon() {
    toolbarContext.current.style.display = "flex";
  }
  function compressEditor() {
    editorContext.current.style.width = "55%";
  }
  function expandEditor() {
    editorContext.current.style.width = "74%";
  }
  function extraLargeEditor() {
    editorContext.current.style.width = "78%";
  }
  function removeSlider() {
    sliderContext.current.style.display = "none";
  }
  function showSlider() {
    sliderContext.current.style.display = "flex";
  }
  function moveSliderLeft() {
    sliderContext.current.style.right = "20vw";
  }
  function moveSliderRight() {
    sliderContext.current.style.right = 0;
  }
  function expandMainEditor() {
    editorMainContext.current.style.height = "100vh";
  }
  function compressMainEditor() {
    editorMainContext.current.style.height = "90vh";
  }
  function fireEventCircleUp(color) {
    circleContext.current.style.display = "block";
    circleContext.current.style.backgroundColor = color;
    circleContext.current.style.animation = "goBigAnimation 1s linear forwards";
    let timer = setTimeout(() => {
      circleContext.current.style.animation = "";
      circleContext.current.style.display = "none";
      return clearTimeout(timer);
    }, 1200);
  }
  function fireEventCircleDown() {
    circleContext.current.style.animation = "";
  }

  function slideLeft() {
    googleAppContext.current.style.right = 0;
    googleAppContext.current.style.boxShadow = "0 0 5px 2px rgba(0,0,0,0.2)";
  }
  function slideRight() {
    googleAppContext.current.style.right = "-20vw";
    googleAppContext.current.style.boxShadow = "0 0 0px 0px rgba(0,0,0,0)";
  }
  function compressToolbar() {
    toolContext.current.style.width = "75%";
  }
  function expandToolbar() {
    toolContext.current.style.width = "94%";
  }

  const value = {
    headerContext,
    toolbarContext,
    editorContext,
    editorMainContext,
    sliderContext,
    circleContext,
    appSelected,
    googleAppContext,
    toolContext,
    compressToolbar,
    expandToolbar,
    setAppSelected,
    expandMainEditor,
    compressMainEditor,
    compressHeader,
    removeHeader,
    showHeader,
    removeToolbarIcon,
    showToolbarIcon,
    expandHeader,
    compressEditor,
    expandEditor,
    extraLargeEditor,
    removeSlider,
    showSlider,
    fireEventCircleUp,
    fireEventCircleDown,
    slideLeft,
    slideRight,
    moveSliderLeft,
    moveSliderRight,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
}
