import React, { PropsWithChildren } from "react";

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function Modal({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  return (
    <div className="w-full h-full flex items-center justify-center fixed">

      <div
        className="w-screen h-screen fixed top-0 z-9999 bg-black bg-opacity-20"
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
      <dialog
        className="flex flex-col p-7 bg-white rounded-md shadow-xl"
      >{children}</dialog>
      
    </div>
  );
}

export default Modal;
