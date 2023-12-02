// format date to da-DA locale
export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("da-DA", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(date);
};
