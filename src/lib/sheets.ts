type Row = Record<string, string>;

export async function fetchSheetRows(): Promise<Row[]> {
  const base = import.meta.env.VITE_FORM_ENDPOINT as string;
  const range = import.meta.env.VITE_SHEET_RANGE as string || 'Sheet1!A1:B1000';
  if (!base) throw new Error('Missing VITE_FORM_ENDPOINT');

  const url = `${base}?range=${encodeURIComponent(range)}`;
  const res = await fetch(url, { method: 'GET' });
  if (!res.ok) throw new Error(`Sheets proxy error: ${res.status}`);
  const json = await res.json();
  return Array.isArray(json.data) ? json.data : [];
}
