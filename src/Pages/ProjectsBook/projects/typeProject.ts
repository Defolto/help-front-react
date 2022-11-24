export type IProject = {
  name: string;
  description: string;
  dateCreate: Date;
  level: number;
  number: number;
  tags: string[];
  notes: string[];
  materials: string[];
  links: string[];
};

export function setDateProject(date: string) {
  const infoDate = date.split(".");
  return new Date(+infoDate[2], +infoDate[1] - 1, +infoDate[0]);
}
