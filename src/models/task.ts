export enum TaskState {
    Creating = "creating",
    Created = "created",
}

export type Task = {
    concluded: unknown;
    id: string;
    title: string;
    state: TaskState;
};

export const TASKS_KEY = "tasks";