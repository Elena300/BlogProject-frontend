import React from "react";
import SignInForm from "./SignInForm";
import { createPortal } from "react-dom";
import { useAtomValue } from "jotai";
import { modalAtom } from "../State.jsx";

const MountElement = document.getElementById("overlay");
const myStyle = {
 position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIindex: "40",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Overlay() {
  const modal = useAtomValue(modalAtom);
  return modal ? createPortal(
    <div style={myStyle}>
      <SignInForm />
    </div>,
    MountElement
  )
   : null;
}


export default Overlay;
