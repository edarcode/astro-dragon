const currentYear = 2024;

const years = Array.from({ length: currentYear - 1996 + 1 }, (_, i) => {
  const year = currentYear - i;
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
