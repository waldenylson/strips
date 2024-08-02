"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

import StripEditActionButton from "../StripEditActionButton";
import StripInfoActionButton from "../StripInfoActionButton";
import { TStripCard } from "./TStripCard";

const StripCard: React.FC<TStripCard> = ({
  matricula,
  setor,
  ssr,
  adep,
  ades,
  // strip,
}) => {
  return (
    <Card
      sx={{
        cursor: "pointer",
        display: "flex",
        width: 555,
        height: 140,
        backgroundColor: "#5e5b5b", // 5e5b5b,
        borderRadius: "1px 1px 1px 1px",
        border: "1px solid",
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

          {/* <StripInfoActionButton matricula={matricula} /> */}
          <StripEditActionButton matricula={matricula} />
        </CardContent>
      </Box>
    </Card>
  );
};

export default StripCard;
