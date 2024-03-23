import { todoKeys } from "@/core/react-query"
import { useQuery } from "@tanstack/react-query"
import { getTodoCollection } from "./todo-collection.repository"

export const useTodoCollectionQuery = () => {
  const {data: todoCollection = []} = useQuery({
    queryKey: todoKeys.todoCollection(),
    queryFn: () => getTodoCollection(),
  });
  return {todoCollection};
}