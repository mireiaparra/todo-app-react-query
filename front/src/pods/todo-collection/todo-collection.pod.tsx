import React from "react";
import { useTodoCollectionQuery } from "./use-todo-collection-query.hook";
import classes from "./todo-collection.pod.module.css";

import { TodoAppendComponent } from "./components";
import { Mode, TodoVm } from "./todo-collection.vm";
import { useMutation } from "@tanstack/react-query";
import { insertTodo } from "./todo-collection.repository";
import { queryClient, todoKeys } from "@/core/react-query";

export const TodoCollectionPod : React.FC = () => {
  const [mode, setMode] = React.useState<Mode>("ReadOnly");
  const [connectionLost, setConnectionLost] = React.useState(false);
  const {todoCollection, isError} = useTodoCollectionQuery(!connectionLost);

  const {mutate: insertTodoMutation} = useMutation({
    mutationFn: insertTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: todoKeys.all
      });
    }
  });

  const handleAppend = (item: TodoVm) => {
    insertTodoMutation(item);
    setMode("ReadOnly");
  }

  React.useEffect(() => {
    if (isError) {
      setConnectionLost(true);
    }
  }, [isError]);

  if(connectionLost) {
    return (<button onClick={() => setConnectionLost(false)}>Retry</button>)
  }

  return (
    <div>
      <h1>TODO Collection</h1>
      <div className={classes.todoList}>
      {todoCollection.map(todo => (
          <React.Fragment key={todo.id}>
            <div>{todo.isDone ? '✅' : '  ❌' }</div>
            <span>{todo.description}</span>
            </React.Fragment>
      ))}
      </div>
    <TodoAppendComponent
    mode={mode}
    setAppendMode={() => setMode("Append")}
    onCancel={() => setMode("ReadOnly")}
    onAppend={handleAppend}
    />
    </div>
  );
}