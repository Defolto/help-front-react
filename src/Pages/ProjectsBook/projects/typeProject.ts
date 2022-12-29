type IFile = {
  title: string;
  src: string;
};

export type IProject = {
  name: string;
  description: string;
  dateCreate: Date;
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

export function getCorrectDate(date: Date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

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
