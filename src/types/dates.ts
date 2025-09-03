export enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

export const machineReadableMonths = {
  [Month.Jan]: '01',
  [Month.Feb]: '02',
  [Month.Mar]: '03',
  [Month.Apr]: '04',
  [Month.May]: '05',
  [Month.Jun]: '06',
  [Month.Jul]: '07',
  [Month.Aug]: '08',
  [Month.Sep]: '09',
  [Month.Oct]: '10',
  [Month.Nov]: '11',
  [Month.Dec]: '12',
} as const;

export type ProjectDate = [Month, number];

export const toDateTime = ([month, year]: ProjectDate) =>
  `${year}-${machineReadableMonths[month]}`;

export const toDateString = ([month, year]: ProjectDate) =>
  `${Month[month]} ${year}`;
