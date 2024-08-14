"use client";

import React, { useEffect } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import GridLayout from "react-grid-layout";
import StripCard from "@/components/StripCard/Card";
import { useStripsStore } from "@/app/stores/StripsStore";

const defaultLayout = [
  { i: "00", x: 0, y: 0, w: 1, h: 2.7 },
  { i: "01", x: 1, y: 0, w: 1, h: 2.7 },
  { i: "02", x: 0, y: 0, w: 1, h: 2.7 },
  { i: "03", x: 2, y: 0, w: 1, h: 2.7 },
  { i: "04", x: 0, y: 0, w: 1, h: 2.7 },
  { i: "05", x: 3, y: 0, w: 1, h: 2.7 },
  { i: "06", x: 0, y: 0, w: 1, h: 2.7 },
  { i: "07", x: 4, y: 0, w: 1, h: 2.7 },
  { i: "08", x: 0, y: 0, w: 1, h: 2.7 },
  { i: "09", x: 5, y: 0, w: 1, h: 2.7 },
  { i: "10", x: 0, y: 0, w: 1, h: 2.7 },
  { i: "11", x: 6, y: 0, w: 1, h: 2.7 },
  { i: "12", x: 0, y: 0, w: 1, h: 2.7 },
  { i: "13", x: 7, y: 0, w: 1, h: 2.7 },
  { i: "14", x: 0, y: 0, w: 1, h: 2.7 },
  { i: "15", x: 8, y: 0, w: 1, h: 2.7 },
  { i: "16", x: 0, y: 0, w: 1, h: 2.7 },
  { i: "17", x: 9, y: 0, w: 1, h: 2.7 },
  { i: "18", x: 0, y: 0, w: 1, h: 2.7 },
  { i: "19", x: 10, y: 0, w: 1, h: 2.7 },
  { i: "20", x: 0, y: 0, w: 1, h: 2.7 },
  { i: "21", x: 11, y: 0, w: 1, h: 2.7 },
  { i: "22", x: 0, y: 0, w: 1, h: 2.7 },
  { i: "23", x: 12, y: 0, w: 1, h: 2.7 },
  { i: "24", x: 0, y: 0, w: 1, h: 2.7 },
  { i: "25", x: 13, y: 0, w: 1, h: 2.7 },
];

export default function Strips() {
  const [disableDrag, setDisableDrag] = React.useState(false);
  const strips = useStripsStore((state) => state.strips);
  const [userLayout, setUserLayout] = React.useState<any>(defaultLayout);

  React.useEffect(() => {
    if (localStorage.getItem("layoutSavedOnDrag")) {
      setUserLayout(
        JSON.parse(localStorage.getItem("layoutSavedOnDrag") || "")
      );
    } else {
      setUserLayout(defaultLayout);
    }
  }, []);

  const layoutStorageSave = (item: any) => {
    setTimeout(() => {
      localStorage.setItem("layoutSavedOnDrag", JSON.stringify(item));
    }, 500);
  };

  return (
    <>
      <GridLayout
        className="layout"
        layout={defaultLayout}
        cols={2}
        rowHeight={45}
        width={1141}
        isResizable={false}
        draggableCancel=".noDrag"
        onLayoutChange={layoutStorageSave}
        // define quantidade maxima de empilhamento de strips -------------------
        preventCollision={disableDrag}
        onDragStop={(item) => {
          const hasValueLessThanTen = item.some(function (value) {
            return value.y > 29;
          });

          hasValueLessThanTen ? setDisableDrag(true) : setDisableDrag(false);
        }}
        // ----------------------------------------------------------------------
      >
        {strips.map((item, index) => {
          return (
            <div key={defaultLayout[index].i}>
              <StripCard
                matricula={item.matricula}
                setor={item.setor}
                ssr={item.ssr}
                adep={item.adep}
                ades={item.ades}
              />
            </div>
          );
        })}

        {/* {Array.from({ length: 20 }, (_, index) => {
            return (
              <div key={defaultLayout[index].i}>
                <StripCard
                  matricula={gerarVoo()}
                  setor={"45"}
                  ssr={"7777"}
                  adep={"SBRF"}
                  ades={"SBGL"}
                />
              </div>
            );
          })} */}
      </GridLayout>
    </>
  );
}
