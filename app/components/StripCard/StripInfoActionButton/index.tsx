import { Info } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React from "react";

import StripDetailDialog from "~/components/Dialogs/StripDetailDialog";

interface IStripCard {
  matricula: string;
}

const StripInfoActionButton: React.FC<IStripCard> = ({ matricula }) => {
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          ratione error veniam cupiditate nam quas qui repudiandae? Recusandae,
          illo? Esse ipsa, ut explicabo molestiae exercitationem eveniet! Nobis
          rerum quis temporibus?
        </Typography>
      </StripDetailDialog>
    </>
  );
};

export default StripInfoActionButton;
