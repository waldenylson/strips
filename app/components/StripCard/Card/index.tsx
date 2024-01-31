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
        width: 360,
        height: 144,
        margin: "1px 1px 1px 1px",
        backgroundColor: "#5e5b5b", // 5e5b5b,
        borderRadius: "1px 1px 1px 1px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            <b title="MATRICULA">{matricula} </b>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i title="SETOR">{setor}</i>
          </Typography>
          <Typography component="div" variant="h6">
            <i title="ADEP">{adep}</i>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <u>
              <i title="SSR">{ssr}</i>
            </u>
          </Typography>
          <Typography component="div" variant="h6">
            <i title="ADES">{ades}</i>
          </Typography>

          <StripInfoActionButton matricula={matricula} />
          <StripEditActionButton matricula={matricula} />
        </CardContent>
      </Box>
    </Card>
  );
};

export default StripCard;
