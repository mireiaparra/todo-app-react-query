import * as apiModel from "./api/api.model"
import { mapTodoFromApiToVm } from "./todo-collection.mapper"
import * as vm from "./todo-collection.vm"
import { getTodoCollection as getTodoCollectionApi } from "./api/api"


export const getTodoCollection = async (): Promise<vm.TodoVm[]> => {
  //Get the collection of todos from the API
  const apiTodoCollection: apiModel.TodoModel[] = await getTodoCollectionApi();
  
  // Map the collection of todos from the API to the view model
  return apiTodoCollection.map(mapTodoFromApiToVm);

}
  