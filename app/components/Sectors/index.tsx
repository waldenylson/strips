import { Button } from "@mui/material";

const Sectors: React.FC = () => {
  return (
    <div className="bottom-right-box-grid">
      <div className="bottom-right-box-grid-col-1">
        <Button
          className="bottom-right-box-grid-col-1-btn"
          style={{ color: "#fff" }}
        >
          SETORES
        </Button>
      </div>
      <div className="bottom-right-box-grid-col-2">
        <span className="inline-flex items-center rounded-md bg-green-500 px-3 mx-1 py-1 text-xl font-medium text-black ring-1 ring-inset ring-green-500/10">
          S1
        </span>
        <span className="inline-flex items-center rounded-md  bottom-right-box-grid-col-2-bg-sector px-3 mx-1 py-1 text-xl font-medium text-black ring-1 ring-inset">
          S2
        </span>
        <span className="inline-flex items-center rounded-md  bottom-right-box-grid-col-2-bg-sector px-3 mx-1 py-1 text-xl font-medium text-black ring-1 ring-inset">
          S3
        </span>
        <span className="inline-flex items-center rounded-md bg-green-500 px-3 mx-1 py-1 text-xl font-medium text-black ring-1 ring-inset ring-green-500/10">
          S4
        </span>
        <span className="inline-flex items-center rounded-md bg-green-500 px-3 mx-1 py-1 text-xl font-medium text-black ring-1 ring-inset ring-green-500/10">
          S5
        </span>
      </div>
    </div>
  );
};

export default Sectors;
