import { create } from "zustand";

import { TStripCard } from "@/components/StripCard/Card/TStripCard";
import { data } from "@/server-sripts/infra/DBMocky/data";

type StripsStore = {
  strips: TStripCard[];
  addToStripStore: (item: TStripCard) => void;
  filterStrips: (matricula: string) => void;
  clearFilter: () => void;
};

export const useStripsStore = create<StripsStore>((set) => {
  const filteredData = data.strips
    .filter((item: { EstadoStrip: string }) => {
      return item.EstadoStrip !== "TER";
    })
    .map(
      (item: {
        Prefixo: any;
        Setor: any;
        CodSSR: any;
        Adep: any;
        Ades: any;
      }) => {
        return {
          matricula: item.Prefixo,
          setor: item.Setor,
          ssr: item.CodSSR,
          adep: item.Adep,
          ades: item.Ades,
        };
      }
    )
    .slice(0, 20);

  return {
    strips: filteredData,

    addToStripStore: (item) => {
      set((state) => ({
        strips: [...state.strips, item],
      }));
    },
    filterStrips: (matricula) => {
      set((state) => ({
        strips: state.strips.filter((item) => {
          return item.matricula.toLocaleLowerCase().includes(matricula);
        }),
      }));
    },
    clearFilter: () => {
      set((state) => ({
        strips: filteredData,
      }));
    },
  };
});
