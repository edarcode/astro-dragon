const years = Array.from({ length: 2025 - 1996 + 1 }, (_, i) => {
  const year = 1996 + i;
  return {
    value: year,
    display: String(year),
  };
});

export const YEARS = [
  {
    value: 0,
    display: "Año",
  },
  ...years,
];
