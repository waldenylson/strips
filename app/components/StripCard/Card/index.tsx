import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

import StripEditActionButton from "../StripEditActionButton";
import StripInfoActionButton from "../StripInfoActionButton";

interface IStripCard {
  matricula: string;
}

const StripCard: React.FC<IStripCard> = ({ matricula }) => {
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
          <StripInfoActionButton matricula={matricula} />
          <StripEditActionButton matricula={matricula} />
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
};

export default StripCard;
