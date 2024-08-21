import { Check, CheckCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import * as React from "react";
import Swal from "sweetalert2";

export default function ActiveSectorsSelectionForm() {
  const [state, setState] = React.useState({
    setorxx: true,
    setorxy: false,
    setorxz: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const ControlledSectorsSave = (item: any) => {
    localStorage.setItem("ControlledSectors", JSON.stringify(item));
  };

  const ControlledSectorsGet = () => {
    if (localStorage.getItem("ControlledSectors")) {
      setState(JSON.parse(localStorage.getItem("ControlledSectors") || ""));
    } else {
      setState({
        setorxx: true,
        setorxy: false,
        setorxz: false,
      });
    }
  };

  React.useEffect(() => {
    ControlledSectorsGet();
  }, []);

  const { setorxx, setorxy, setorxz } = state;
  const error = [setorxx, setorxy, setorxz].filter((v) => v).length !== 2;

  return (
    <>
      <Box sx={{ display: "flex", fontSize: "30px" }}>
        <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
          <FormLabel component="legend">
            Selecionar Setores Controlados
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={setorxx}
                  onChange={handleChange}
                  name="setorxx"
                />
              }
              label="Setor XX"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={setorxy}
                  onChange={handleChange}
                  name="setorxy"
                />
              }
              label="Setor XY"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={setorxz}
                  onChange={handleChange}
                  name="setorxz"
                />
              }
              label="Setor XZ"
            />
          </FormGroup>
          <FormHelperText>Atenção!</FormHelperText>
        </FormControl>
        <FormControl
          required
          error={error}
          component="fieldset"
          sx={{ m: 3 }}
          variant="standard"
        ></FormControl>
      </Box>
      <Button
        variant="contained"
        sx={{ marginBottom: 5, width: "150px" }}
        startIcon={<CheckCircle />}
        onClick={() => {
          ControlledSectorsSave(state).then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Setores Selecionados com sucesso!",
              showConfirmButton: true,
              focusConfirm: true,
              timer: 3000,
              backdrop: false,
              timerProgressBar: true,
              toast: true,
            });
          });
        }}
      >
        Aplicar
      </Button>
    </>
  );
}
