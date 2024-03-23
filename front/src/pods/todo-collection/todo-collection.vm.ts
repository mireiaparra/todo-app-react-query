export type Mode = "ReadOnly" | "Append" | "Edit";

export interface TodoVm {
  id: number;
  description: string;
  isDone: boolean;
}

export const createEmptyTodoVm = (): TodoVm => ({
  id: 0,
  description: "",
  isDone: false,
});