import { createContext } from "react";

const TeamModalContext = createContext({
  show: false,
  setShow: (show) => {},
  title: "",
  setTitle: (title) => {},
  styleContext: "",
  confirmText: "",
  setConfirmText: (confirmText) => {},
  cancelText: "Cancel",
  setCancelText: (cancelText) => {},
  positive: false,
  setPositive: (positive) => {},

  onConfirm: () => {},
  setOnConfirm: (onConfirm) => {},
});

export default TeamModalContext;
