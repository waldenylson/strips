"use client";

import React from "react";
import dynamic from "next/dynamic";
import ConsoleStatus from "@/components/ConsoleStatus";
import Sectors from "@/components/Sectors";
import Strips from "@/components/strips";

const Clock = dynamic(() => import("@/components/Clock"), { ssr: false });

import "./style.css";
import { Button } from "@mui/material";

export default function Index() {
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

  const gerarVoo = () => {
    const prefixos = ["TAM", "GLO", "AZU", "TAP"];
    const prefixoAleatorio =
      prefixos[Math.floor(Math.random() * prefixos.length)];
    const numeroAleatorio = Math.floor(Math.random() * 9000) + 1000;
    return prefixoAleatorio + numeroAleatorio;
  };

  return (
    <div
      style={{
        border: "1px solid #343d46",
        width: "99vw",
        height: "99.5vh",
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
          <ConsoleStatus />
        </div>
      </div>
      <div id="strips-container" className="prevent-select">
        <Strips />
      </div>

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
          <Sectors />
        </div>
        <div className="bottom-left-box">
          <Clock />
        </div>
      </div>
    </div>
  );
}
