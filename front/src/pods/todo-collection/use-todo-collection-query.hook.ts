import { todoKeys } from "@/core/react-query"
import { useQuery } from "@tanstack/react-query"
import { getTodoCollection } from "./todo-collection.repository"

export const useTodoCollectionQuery = (enabled: boolean) => {
  const {data: todoCollection = [], isError} = useQuery({
    queryKey: todoKeys.todoCollection(),
    queryFn: () => getTodoCollection(),
    enabled
  });
  return {todoCollection, isError};
}