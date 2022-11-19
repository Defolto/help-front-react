export type ITask = {
  number: number;
  level: number;
  date: Date;
  description: string;
  notes: string[];
  example: ITable;
};

type ITable = {
  inData: any[];
  outData: any[];
};

export function setDateTask(date: string) {
  const infoDate = date.split(".");
  return new Date(+infoDate[2], +infoDate[1] - 1, +infoDate[0]);
}
