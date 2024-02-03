const FormatToIdr = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(value)
    .replace(/,00$/, "");
};

export default FormatToIdr;
