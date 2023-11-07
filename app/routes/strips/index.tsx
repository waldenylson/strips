import { Button } from "@mui/material";
import type { MetaFunction } from "@remix-run/node";
import React from "react";

import "~/routes/strips/styles.css";

export const meta: MetaFunction = () => {
  return [
    { title: "STRIPS - Sistema Eletrônico de Strips" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [date, setDate] = React.useState(new Date());

  function tick() {
    setDate(new Date());
  }

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, [date]);

  return (
    <div
      style={{
        border: "1px solid #343d46",
        width: "99.3vw",
        height: "98.7vh",
      }}
    >
      <div className="top-left-box">
        <div className="top-left-box-grid">
          <div className="top-left-box-grid-col-1">
            SISTEMA ELETRÔNICO DE STRIPS
          </div>
          <div className="top-left-box-grid-col-2">Operador: José da Silva</div>
          <div className="top-left-box-grid-col-3">CTRXX</div>
        </div>
      </div>
      <div className="top-right-box">
        <span>CTR &nbsp;&nbsp;</span>
        <span className="inline-flex items-center rounded-md bg-green-700 px-3 mx-1 py-1 text-lg font-medium text-black ring-1 ring-inset ring-green-500/10">
          1
        </span>
        <span className="inline-flex items-center rounded-md bg-red-700 px-3 mx-1 py-1 text-lg font-medium text-black ring-1 ring-inset ring-red-600/10">
          2
        </span>
        <span className="inline-flex items-center rounded-md bg-red-700 px-3 mx-1 py-1 text-lg font-medium text-black ring-1 ring-inset ring-red-600/10">
          3
        </span>
        <span className="inline-flex items-center rounded-md bg-red-700 px-3 mx-1 py-1 text-lg font-medium text-black ring-1 ring-inset ring-red-600/10">
          4
        </span>
        <span className="inline-flex items-center rounded-md bg-green-700 px-3 mx-1 py-1 text-lg font-medium text-black ring-1 ring-inset ring-green-500/10">
          5
        </span>
        <span className="inline-flex items-center rounded-md bg-green-700 px-3 mx-1 py-1 text-lg font-medium text-black ring-1 ring-inset ring-green-500/10">
          6
        </span>
        <span className="inline-flex items-center rounded-md bg-red-700 px-3 mx-1 py-1 text-lg font-medium text-black ring-1 ring-inset ring-red-600/10">
          7
        </span>
        <span className="inline-flex items-center rounded-md bg-red-700 px-3 mx-1 py-1 text-lg font-medium text-black ring-1 ring-inset ring-red-600/10">
          8
        </span>
      </div>
      <div className="bottom-right-box">
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
      </div>
      <div className="bottom-left-box">
        <div style={{ marginTop: "10px" }}>
          <span className="hora">
            {`${date.toLocaleTimeString("en-US", {
              hour12: false,
            })}`}
          </span>
          <span className="data">
            {`${date.toLocaleDateString("pt-BR")}`} UTC
          </span>
        </div>
      </div>
    </div>
  );
}
