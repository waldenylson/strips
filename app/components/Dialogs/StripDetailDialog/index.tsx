import { Close, ConnectingAirports } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
// import Typography from "@mui/material/Typography";
import * as React from "react";

import { IDialogData } from "../IDialogsContract";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StripDetailDialog: React.FC<IDialogData> = ({
  open,
  dialogHandler,
  children,
  ...otherProps
}) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={(_, reason) => {
        reason === "escapeKeyDown" ? dialogHandler() : "";
      }}
      aria-describedby="alert-dialog-slide-description"
      className="noDrag"
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <ConnectingAirports fontSize="large" />
        {otherProps.dialogTitle}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={dialogHandler}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <Close />
      </IconButton>
      <DialogContent dividers id="alert-dialog-slide-description">
        {children}
      </DialogContent>
      <DialogContent dividers></DialogContent>
    </Dialog>
  );
};

export default StripDetailDialog;
