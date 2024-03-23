import { Mode, TodoVm, createEmptyTodoVm } from "../todo-collection.vm";
import { TodoItemEdit } from "./todo-item-edit.component";

interface Props {
  mode: Mode;
  setAppendMode: () => void;
  onCancel: () => void;
  onAppend: (item: TodoVm) => void;
}

export const TodoAppendComponent: React.FC<Props> = (props) => {
  const { mode, setAppendMode, onCancel, onAppend } = props;

  

  return (
    <>
      {mode !== "Append" ? (
        <button onClick={setAppendMode}>Insert mode</button>
      ) : (
        <div>
          <TodoItemEdit
          item={createEmptyTodoVm()}
          onSave={onAppend}
          onCancel={onCancel}
          />

        </div>
      )}
    </>
  );
};