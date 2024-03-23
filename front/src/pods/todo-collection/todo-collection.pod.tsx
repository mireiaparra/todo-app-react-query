import { useQuery } from "@tanstack/react-query";
import { getTodoCollection } from "./todo-collection.repository";

export const TodoCollectionPod : React.FC = () => {
  const {data: todoCollection = []} = useQuery({
    queryKey: ["todoCollection"],
    queryFn: () => getTodoCollection(),
  })
  return (
    <div>
      <h1>TODO Collection</h1>
      {todoCollection.map(todo => (
        <div key={todo.id}>
          <span>{todo.description}</span>
          </div>
      ))}
    </div>
  );
}