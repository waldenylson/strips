/* eslint-disable @typescript-eslint/no-unused-vars */
import { MenuOpen, RestartAlt } from "@mui/icons-material";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import React from "react";

import { handleLayoutRestore } from "../Sectors";

const actions = [{ icon: <RestartAlt />, name: "Layout Padrão" }];

const SpeedDialTootipMenu: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <SpeedDial
        ariaLabel=""
        sx={{
          position: "absolute",
          bottom: 10,
          right: 16,
        }}
        icon={<MenuOpen />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          sx: {
            bgcolor: "secondary.main",
            background:
              "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(18,35,51,1) 41%, rgba(0,212,255,1) 100%);",
            "&:hover": {
              bgcolor:
                "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(18,35,51,1) 41%, rgba(0,212,255,1) 100%);",
            },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleLayoutRestore}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default SpeedDialTootipMenu;
