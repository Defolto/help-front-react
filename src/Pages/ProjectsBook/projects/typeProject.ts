type IFile = {
  title: string;
  src: string;
};

export type IProject = {
  name: string;
  description: string;
  date: Date;
  level: number;
  number: number;
  tags: string[];
  notes: string[];
  materials: IFile[];
  links: IFile[];
};

export function setDateProject(date: string) {
  const infoDate = date.split(".");
  return new Date(+infoDate[2], +infoDate[1] - 1, +infoDate[0]);
}

function addZeroStart(number: number): string {
  const numberToString = number + "";
  return numberToString.length === 1 ? 0 + numberToString : numberToString;
}

export function getCorrectDate(date: Date) {
  const day = addZeroStart(date.getDate());
  const month = addZeroStart(date.getMonth() + 1);
  const year = addZeroStart(date.getFullYear());

  return `${day}.${month}.${year}`;
}

type IThemeProject = "sites" | "application" | "design" | "components";
export function getUrlProjectMaterial(
  theme: IThemeProject,
  number: number,
  nameFile: string
): string {
  return `/materials/projects/${theme}/${number}/${nameFile}`;
}
