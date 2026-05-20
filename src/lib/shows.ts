import Papa from "papaparse";

const SHEET_ID = "1PpLiGKipY06RoNVT9b-b72MqJEfAEp27xZt14WAT7xE";
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

export type Show = {
  mes: string;
  data: string;
  horario: string;
  local: string;
  cidade: string;
  ingresso: string;
};

export async function fetchShows(): Promise<Show[]> {
  const res = await fetch(CSV_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Falha ao carregar agenda");
  const csv = await res.text();
  const parsed = Papa.parse<Record<string, string>>(csv, {
    header: true,
    skipEmptyLines: true,
  });
  return parsed.data
    .map((r) => ({
      mes: (r["MÊS"] ?? r["MES"] ?? "").trim(),
      data: (r["DATA"] ?? "").trim(),
      horario: (r["HORÁRIO"] ?? r["HORARIO"] ?? "").trim(),
      local: (r["LOCAL"] ?? "").trim(),
      cidade: (r["CIDADE"] ?? "").trim(),
      ingresso: (r["INGRESSO"] ?? "").trim(),
    }))
    .filter((s) => s.data || s.local);
}
