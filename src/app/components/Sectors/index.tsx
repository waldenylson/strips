"use client";

import ActiveSectorsSelection from "../ActiveSectorsSelection";
import SearchField from "../SearchField";
import SpeedDialTootipMenu from "../SpeedDialTootipMenu";

export const handleLayoutRestore = () => {
  localStorage.removeItem("layoutSavedOnDrag");
  window.location.reload();
};

const Sectors: React.FC = () => {
  const handleSearch = (value: string) => {
    console.log("Valor de pesquisa:", value);
  };

  return (
    <>
      <div className="bottom-right-box-grid">
        <div className="bottom-right-box-grid-col-1">
          <ActiveSectorsSelection />
        </div>
        <div className="bottom-right-box-grid-col-2">
          {/* <span className="inline-flex items-center rounded-md  bottom-right-box-grid-col-2-bg-sector px-3 mx-1 py-1 text-xl font-medium text-black ring-1 ring-inset">
            S2
          </span>
          <span className="inline-flex items-center rounded-md  bottom-right-box-grid-col-2-bg-sector px-3 mx-1 py-1 text-xl font-medium text-black ring-1 ring-inset">
            S3
          </span> */}
          {/*<span className="inline-flex items-center rounded-md bg-green-500 px-3 mx-1 py-1 text-xl font-medium text-black ring-1 ring-inset ring-green-500/10">
          S4
        </span>
        <span className="inline-flex items-center rounded-md bg-green-500 px-3 mx-1 py-1 text-xl font-medium text-black ring-1 ring-inset ring-green-500/10">
          S5
        </span> */}
        </div>
        <SpeedDialTootipMenu />
      </div>
      <SearchField />
    </>
  );
};

export default Sectors;
