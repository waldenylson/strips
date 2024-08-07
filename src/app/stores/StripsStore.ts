import { create } from "zustand";

import { TStripCard } from "@/components/StripCard/Card/TStripCard";
import { data } from "@/server-sripts/infra/DBMocky/data";

type StripsStore = {
  strips: TStripCard[];
  addToStripStore: (item: TStripCard) => void;
  filterStrips: (matricula: string) => void;
  fetchStrips: () => Promise<void>;
};

export const useStripsStore = create<StripsStore>((set) => {
  return {
    strips: [],
    fetchStrips: async () => {
      const teste = data.strips
        .filter((item: { EstadoStrip: string }) => {
          return item.EstadoStrip === "TER";
        })
        .map((item) => {
          return {
            matricula: item.Prefixo,
            setor: item.Setor,
            ssr: item.CodSSR,
            adep: item.Adep,
            ades: item.Ades,
          };
        });

      set((state) => teste);
    },
    addToStripStore: (item) =>
      set((state) => ({
        strips: [...state.strips, item],
      })),
    filterStrips: (matricula) =>
      set((state) => ({
        strips: state.strips.filter((item) => {
          return item.matricula.toLocaleLowerCase().includes(matricula);
        }),
      })),
  };
});
