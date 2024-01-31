import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

import FullScreenDialog from "~/components/Dialogs/FullScreenDialog";

interface IStripCard {
  matricula: string;
}

const StripEditActionButton: React.FC<IStripCard> = ({ matricula }) => {
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
        style={{ position: "fixed", top: 44, right: 10 }}
      >
        <Edit />
      </IconButton>
      <FullScreenDialog
        open={dialogOpen}
        dialogHandler={dialogHandler}
        dialogTitle={"Editar Dados da Strip " + matricula}
      >
        <h1 style={{ fontSize: "100px" }}>
          Formulário com Dados da STRIP para Edição
        </h1>
      </FullScreenDialog>
    </>
  );
};

export default StripEditActionButton;
