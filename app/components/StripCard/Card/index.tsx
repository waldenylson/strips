import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

import StripEditActionButton from "../StripEditActionButton";
import StripInfoActionButton from "../StripInfoActionButton";

interface IStripCard {
  matricula: string;
  setor: string;
  ssr: string;
  adep: string;
  ades: string | null;
}

const StripCard: React.FC<IStripCard> = ({
  matricula,
  setor,
  ssr,
  adep,
  ades,
}) => {
  return (
    <Card
      sx={{
        cursor: "pointer",
        display: "flex",
        width: 355,
        height: 144,
        margin: "3px 3px 3px 3px",
        backgroundColor: "#5e5b5b", // "#5e5b5b",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            <b>Matrícula:</b> <i>{matricula}</i>
          </Typography>
          <Typography component="div" variant="h6">
            <b>Setor:</b> <i>{setor}</i>
          </Typography>
          <Typography component="div" variant="h6">
            <b>SSR:</b> <i>{ssr}</i>
          </Typography>
          <Typography component="div" variant="h6">
            <b>ADEP:</b> <i>{adep}</i> &nbsp;&nbsp;&nbsp; <b>ADES:</b>{" "}
            <i>{ades}</i>
          </Typography>

          <StripInfoActionButton matricula={matricula} />
          <StripEditActionButton matricula={matricula} />
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
};

export default StripCard;
