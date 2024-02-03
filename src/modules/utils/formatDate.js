export const FormatDate1 = (date1) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date1.toLocaleString("en-UK", options);
};

export const FormatDate2 = (date2) => {
  const options2 = { year: "numeric", month: "numeric", day: "numeric" };
  return date2.toLocaleDateString("en-CA", options2);
};
