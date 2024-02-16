import { Info } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React from "react";

import StripDetailDialog from "~/components/Dialogs/StripDetailDialog";

interface IStripCard {
  matricula: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // strip: any;
}

const StripInfoActionButton: React.FC<IStripCard> = ({ matricula, strip }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleClose = React.useCallback(() => {
    setDialogOpen(false);
  }, []);

  const dialogHandler = React.useCallback(() => {
    handleClose();
  }, [handleClose]);

  return (
    <>
      <IconButton
        aria-label="close"
        onClick={() => setDialogOpen(true)}
        className="noDrag"
        style={{ position: "fixed", top: 8, right: 10 }}
      >
        <Info />
      </IconButton>
      <StripDetailDialog
        open={dialogOpen}
        dialogHandler={dialogHandler}
        dialogTitle={matricula}
      >
        <Typography variant="subtitle1" color="text.secondary" component="div">
          <span>{strip}</span>
        </Typography>
      </StripDetailDialog>
    </>
  );
};

export default StripInfoActionButton;
