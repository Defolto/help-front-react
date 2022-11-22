import {ITask, setDateTask} from "./typeTask";

export const DATA: ITask[] = [
    {
        number: 1,
        level: 1,
        date: setDateTask("23.11.2022"),
        description: "задачи JS",
        notes: ["Первая заметка", "Вторая азметка"],
        example: {
            inData: [1, 2, 3, 4],
            outData: [5, 6, 7, 8],
        },
    },
];
