import { DialogProps } from "@mui/material";

export interface IDialogData extends DialogProps {
    dialogHandler: () => void;
    open: DialogProps["open"];
    dialogTitle: string;
  }