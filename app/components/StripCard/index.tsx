import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

import GenericDialog from "../GenericDialog";

export default function StripCard() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleClose = React.useCallback(() => {
    setDialogOpen(false);
  }, []);

  const dialogHandler = React.useCallback(() => {
    handleClose();
  }, [handleClose]);

  return (
    <Card
      sx={{
        display: "flex",
        width: 360,
        height: 140,
        margin: "3px 3px 3px 3px",
        backgroundColor: "#5e5b5b",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            style={{ cursor: "pointer" }}
            component="div"
            variant="h5"
            onClick={() => setDialogOpen(true)}
          >
            TAP0000
          </Typography>
          <GenericDialog
            open={dialogOpen}
            dialogHandler={dialogHandler}
            dialogTitle="TAP0000"
          >
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Mac Miller
            </Typography>
          </GenericDialog>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
}
