import { Edit, Info } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

import StripDetailDialog from "../dialogs/StripDetailDialog";

interface IStripCard {
  matricula: string;
}

const StripCard: React.FC<IStripCard> = ({ matricula }) => {
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
        width: 355,
        height: 144,
        margin: "3px 3px 3px 3px",
        backgroundColor: "#5e5b5b", // "#5e5b5b",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            style={{ cursor: "pointer" }}
            component="div"
            variant="h5"
          >
            {matricula}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={() => setDialogOpen(true)}
            className="noDrag"
            style={{ position: "fixed", top: 8, right: 10 }}
          >
            <Info />
          </IconButton>
          <IconButton
            aria-label="close"
            onClick={() => setDialogOpen(true)}
            className="noDrag"
            style={{ position: "fixed", top: 44, right: 10 }}
          >
            <Edit />
          </IconButton>
          <StripDetailDialog
            open={dialogOpen}
            dialogHandler={dialogHandler}
            dialogTitle={matricula}
          >
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium ratione error veniam cupiditate nam quas qui
              repudiandae? Recusandae, illo? Esse ipsa, ut explicabo molestiae
              exercitationem eveniet! Nobis rerum quis temporibus?
            </Typography>
          </StripDetailDialog>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
};

export default StripCard;
