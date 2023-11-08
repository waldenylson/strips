import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";

export interface IDialogData extends DialogProps {
  dialogHandler: () => void;
  open: DialogProps["open"];
  dialogTitle: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const GenericDialog: React.FC<IDialogData> = ({
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
      onClose={dialogHandler}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{otherProps.dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {children}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default GenericDialog;
