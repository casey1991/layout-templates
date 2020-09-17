export const isSameDay = (first: Date, last: Date) => {
  const sameYear = first.getFullYear() === last.getFullYear();
  const sameMonth = first.getMonth() === last.getMonth();
  const sameDate = first.getDate() === last.getDate();
  return sameYear && sameMonth && sameDate;
};
export const getLastDayInMonth = (month: number, year: number) => {
  return new Date(year, month, 0);
};
export const getFirstDayInMonth = (month: number, year: number) => {
  return new Date(year, month, 1);
};
