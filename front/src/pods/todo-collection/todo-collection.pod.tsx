import { useTodoCollectionQuery } from "./use-todo-collection-query.hook";

export const TodoCollectionPod : React.FC = () => {
  const {todoCollection} = useTodoCollectionQuery();
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