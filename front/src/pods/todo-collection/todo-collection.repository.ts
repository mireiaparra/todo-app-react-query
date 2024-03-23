import * as apiModel from "./api/api.model"
import { mapTodoFromApiToVm, mapTodoFromVmToApi } from "./todo-collection.mapper"
import * as vm from "./todo-collection.vm"
import { getTodoCollection as getTodoCollectionApi, inserTodo as insertTodoApi } from "./api/api"


export const getTodoCollection = async (): Promise<vm.TodoVm[]> => {
  //Get the collection of todos from the API
  const apiTodoCollection: apiModel.TodoModel[] = await getTodoCollectionApi();
  
  // Map the collection of todos from the API to the view model
  return apiTodoCollection.map(mapTodoFromApiToVm);

}

export const insertTodo = async (todo: vm.TodoVm): Promise<vm.TodoVm> => {
  // Map the todo from the view model to the API model
  const apiTask = mapTodoFromVmToApi(todo);

  // Insert the todo in the API
  const insertedTodo: apiModel.TodoModel = await insertTodoApi(apiTask);

  // Map the inserted todo from the API to the view model
  return mapTodoFromApiToVm(insertedTodo);
}
  