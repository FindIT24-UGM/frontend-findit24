import { createContext } from "react";

const ModalContext = createContext({
  show: false,
  setShow: (show) => {},
  title: "",
  setTitle: (title) => {},
  confirmText: "",
  setConfirmText: (confirmText) => {},
  cancelText: "Cancel",
  setCancelText: (cancelText) => {},
  positive: false,
  setPositive: (positive) => {},
  onConfirm: () => {},
  setOnConfirm: (onConfirm) => {},
});
