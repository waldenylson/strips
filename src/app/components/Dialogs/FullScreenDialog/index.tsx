import { Close } from "@mui/icons-material";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";

import { IDialogData } from "../IDialogsContract";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog: React.FC<IDialogData> = ({
  open,
  dialogHandler,
  children,
  ...otherProps
}) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={dialogHandler}
      TransitionComponent={Transition}
      transitionDuration={{ enter: 400, exit: 300 }}
      {...otherProps}
    >
      <AppBar style={{ backgroundColor: "#444444" }}>
        <Toolbar>
          <IconButton edge="start" onClick={dialogHandler}>
            <Close />
          </IconButton>
          <Typography variant="h6">{otherProps.dialogTitle}</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "100px", border: "0px solid" }}>
        {children}
      </Container>
    </Dialog>
  );
};

export default FullScreenDialog;
