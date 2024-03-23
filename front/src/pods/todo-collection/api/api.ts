import { ENV_VARIABLES } from "@/core/env";
import { TodoModel, todoApiSchema } from "./api.model";
import axios from "axios";

export const getTodoCollection = async (): Promise<TodoModel[]> => {

  const {data} = await axios.get<TodoModel[]>(`${ENV_VARIABLES.TODO_API_BASE_URL}/todos`);
  
  //Check if the response is the expected one
  const result = todoApiSchema.safeParse(data);
  if (!result.success) {
    console.error(result.error);
  }
  return data ?? [];
}

export const inserTodo = async (todo: TodoModel): Promise<TodoModel> => {
  const {data} = await axios.post<TodoModel>(`${ENV_VARIABLES.TODO_API_BASE_URL}/todos`, todo);
  return data;
}