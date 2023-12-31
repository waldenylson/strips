import { Button } from "@mui/material";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import "~/routes/strips/styles.css";
import RGL1 from "node_modules/react-grid-layout/css/styles.css";
import RGL2 from "node_modules/react-resizable/css/styles.css";
import React from "react";
import GridLayout from "react-grid-layout";

import StripCard from "~/components/StripCard/Card";

export const meta: MetaFunction = () => {
  return [
    { title: "STRIPS - Sistema Eletrônico de Strips" },
    { name: "description", content: "Sistema de Strips" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: RGL1 },
  { rel: "stylesheet", href: RGL2 },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function Index() {
  const [date, setDate] = React.useState(new Date());

  /**
   * Disable ContextMenu
   */
  React.useEffect(() => {
    const handleContextmenu = (e: { preventDefault: () => void }) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2.7 },
    { i: "b", x: 1, y: 0, w: 1, h: 2.7 },
    { i: "c", x: 2, y: 0, w: 1, h: 2.7 },
    { i: "d", x: 3, y: 0, w: 1, h: 2.7 },
    { i: "e", x: 4, y: 0, w: 1, h: 2.7 },
    { i: "f", x: 0, y: 0, w: 1, h: 2.7 },
    { i: "g", x: 1, y: 0, w: 1, h: 2.7 },
    { i: "h", x: 2, y: 0, w: 1, h: 2.7 },
  ];

  /**
   * Date Card
   */
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
        cols={5}
        rowHeight={50}
        width={1900}
        isResizable={false}
        draggableCancel=".noDrag"
        style={{
          top: "20px",
          bottom: "50px",
          border: "px solid",
          margin: "10px",
        }}
      >
        {layout.map((item, index) => {
          return (
            <div key={item.i} style={{ border: "0px solid" }}>
              <StripCard matricula={"STRIP de VOO - " + index} />
            </div>
          );
        })}
      </GridLayout>
      {/* <StripCard matricula={"STRIP de VOO"} /> */}
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
