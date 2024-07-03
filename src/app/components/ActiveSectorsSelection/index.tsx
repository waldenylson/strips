import { Button } from "@mui/material";
import React from "react";

import FullScreenDialog from "@/components/Dialogs/FullScreenDialog";

import ActiveSectorsSelectionForm from "./ActiveSectorsSelectionForm";

const ActiveSectorsSelection: React.FC = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleClose = React.useCallback(() => {
    setDialogOpen(false);
  }, []);

  const dialogHandler = React.useCallback(() => {
    handleClose();
  }, [handleClose]);

  return (
    <>
      <Button
        className="bottom-right-box-grid-col-1-btn"
        style={{ color: "#fff", marginLeft: "50px" }}
        onClick={() => setDialogOpen(true)}
      >
        SETORES
      </Button>
      <FullScreenDialog
        open={dialogOpen}
        dialogHandler={dialogHandler}
        dialogTitle={"Setores para Visualização"}
      >
        <ActiveSectorsSelectionForm />
      </FullScreenDialog>
    </>
  );
};

export default ActiveSectorsSelection;
