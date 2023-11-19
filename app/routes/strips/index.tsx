import { Button } from "@mui/material";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import GridLayout from "react-grid-layout";

import StripCard from "~/components/StripCard";

import "~/routes/strips/styles.css";

import "node_modules/react-grid-layout/css/styles.css";
import "node_modules/react-resizable/css/styles.css";

export const meta: MetaFunction = () => {
  return [
    { title: "STRIPS - Sistema Eletrônico de Strips" },
    { name: "description", content: "Sistema de Strips" },
  ];
};

export default function Index() {
  const [date, setDate] = React.useState(new Date());

  const layout = [
    { i: "a", x: 0, y: 0, w: 3, h: 2, minW: 3, maxW: 3 },
    { i: "b", x: 3, y: 0, w: 3, h: 2, minW: 3, maxW: 3 },
    { i: "c", x: 6, y: 0, w: 3, h: 2, minW: 3, maxW: 3 },
    { i: "d", x: 9, y: 0, w: 3, h: 2, minW: 3, maxW: 3 },
    { i: "e", x: 12, y: 0, w: 3, h: 2, minW: 3, maxW: 3 },
    { i: "f", x: 0, y: 0, w: 3, h: 2, minW: 3, maxW: 3 },
    { i: "g", x: 3, y: 0, w: 3, h: 2, minW: 3, maxW: 3 },
    { i: "h", x: 6, y: 0, w: 3, h: 2, minW: 3, maxW: 3 },
  ];

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
        height: "98vh",
      }}
    >
      <div
        id="top"
        style={{
          height: "8%",
          width: "98vw",
          position: "relative",
        }}
      >
        <div className="top-left-box">
          <div className="top-left-box-grid">
            <div className="top-left-box-grid-col-1">
              SISTEMA ELETRÔNICO DE STRIPS
            </div>
            <div className="top-left-box-grid-col-2">
              Operador: José da Silva
            </div>
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
      </div>

      <GridLayout
        className="layout"
        layout={layout}
        cols={16}
        rowHeight={50}
        width={2000}
        isResizable={false}
        style={{
          top: "20px",
          bottom: "50px",
          border: "px solid",
          margin: "10px",
        }}
      >
        {/* {Array.from({ length: 25 }, (_, index) => (
          <StripCard key="a" />
        ))} */}
        {/* <StripCard key="a" /> */}
        <div key="a" style={{ border: "1px solid" }}>
          a
        </div>
        <div key="a" style={{ border: "1px solid" }}>
          a
        </div>
        <div key="b" style={{ border: "1px solid" }}>
          b
        </div>
        <div key="c" style={{ border: "1px solid" }}>
          c
        </div>
        <div key="d" style={{ border: "1px solid" }}>
          d
        </div>
        <div key="e" style={{ border: "1px solid" }}>
          e
        </div>
        <div key="f" style={{ border: "1px solid" }}>
          f
        </div>
        <div key="g" style={{ border: "1px solid" }}>
          g
        </div>
        <div key="h" style={{ border: "1px solid" }}>
          h
        </div>
      </GridLayout>

      <div
        id="bottom"
        style={{
          // border: "1px solid green",
          position: "relative",
          height: "8%",
          bottom: "10px",
        }}
      >
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
    </div>
  );
}
