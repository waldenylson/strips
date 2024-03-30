/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  type LinksFunction,
  type MetaFunction,
  type LoaderFunctionArgs,
  json,
} from "@remix-run/node";
import "~/routes/strips/styles.css";
import { useLoaderData } from "@remix-run/react";
import RGL1 from "node_modules/react-grid-layout/css/styles.css";
import RGL2 from "node_modules/react-resizable/css/styles.css";
import React from "react";
import GridLayout from "react-grid-layout";

import Clock from "~/components/Clock";
import ConsoleStatus from "~/components/ConsoleStatus";
import Sectors from "~/components/Sectors";
import StripCard from "~/components/StripCard/Card";
import { db } from "~/db.server";

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

export const loader = async ({ params }: LoaderFunctionArgs) => {
  // const planoArray =
  //   await db.$queryRaw`SELECT prefixo, CONVERT(plano USING utf8) as 'plano' FROM STRIP_1 WHERE EstadoStrip <> 'TER'`;

  // console.log(planoArray);

  const strips = await db.sTRIP_1.findMany({
    where: {
      EstadoStrip: {
        not: "TER",
      },
    },

    take: 24,
  });

  strips.forEach((registro, index) => {
    const textoDoBlob = registro.Plano?.toString("utf-8"); // Substitua 'utf-8' pelo tipo de codificação apropriado se necessário

    // console.log(textoDoBlob);
  });

  return json(strips);
};

export default function Index() {
  const strips = useLoaderData<typeof loader>();

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

  const defaultLayout = React.useMemo(() => {
    return [
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
  }, []);

  const [userLayout, setUserLayout] = React.useState<any>(defaultLayout);

  React.useEffect(() => {
    if (localStorage.getItem("layoutSavedOnDrag")) {
      setUserLayout(
        JSON.parse(localStorage.getItem("layoutSavedOnDrag") || ""),
      );
    } else {
      setUserLayout(defaultLayout);
    }
  }, [defaultLayout]);

  const layoutStorageSave = (item: any) => {
    setTimeout(() => {
      localStorage.setItem("layoutSavedOnDrag", JSON.stringify(item));
    }, 1000);
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

      <div id="strips-container">
        <GridLayout
          className="layout"
          layout={userLayout}
          cols={2}
          rowHeight={50}
          width={1420}
          isResizable={false}
          draggableCancel=".noDrag"
          style={{}}
          onLayoutChange={layoutStorageSave}
        >
          {strips.map((item, index) => {
            return (
              <div key={defaultLayout[index].i}>
                <StripCard
                  matricula={item.Prefixo}
                  setor={item.Setor}
                  ssr={item.CodSSR}
                  adep={item.Adep}
                  ades={item.Ades}
                />
              </div>
            );
          })}
        </GridLayout>
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
