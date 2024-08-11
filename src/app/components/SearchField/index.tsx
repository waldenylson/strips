import { useStripsStore } from "@/app/stores/StripsStore";
import { defaultLayout } from "@/app/strips/page";
import { Search, Close } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import React from "react";

export default function CustomizedInputBase() {
  const [search, setSearch] = React.useState("");
  const [userLayout, setUserLayout] = React.useState<any>();

  const [clearFilter, filterstrips] = useStripsStore((state) => [
    state.clearFilter,
    state.filterStrips,
  ]);

  const handleClick = () => {
    if (search) {
      setSearch("");
      clearFilter;
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  function handleLayoutRestore() {
    setTimeout(() => {
      localStorage.removeItem("layoutSavedOnDrag");
    }, 1000);
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 300,
        height: 60,
        position: "absolute",
        bottom: 9,
        right: 100,
        backgroundColor: "GrayText",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "#fff", fontStyle: "italic" }}
        placeholder="Filtrar STRIPS"
        inputProps={{ "aria-label": "Filtrar STRIPS" }}
        onChange={(e) => {
          setSearch(e.target.value);
          filterstrips(e.target.value);
          handleLayoutRestore();
        }}
        value={search}
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        id="search"
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handleClick}
      >
        {search ? <Close /> : <Search />}
      </IconButton>
    </Paper>
  );
}
