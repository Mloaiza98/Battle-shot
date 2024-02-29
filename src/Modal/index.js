import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css"

function Modal({ children }) {
  return createPortal(
    <div className="ModalBackground">{children}</div>, //className="ModalBackground"
    document.getElementById("modal")
  );
}

export { Modal };
