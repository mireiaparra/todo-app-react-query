import * as apiModel from './api/api.model';
import * as vm from './todo-collection.vm';

export const mapTodoFromApiToVm = (todo: apiModel.TodoModel): vm.TodoVm => ({
  ...todo
});

export const mapTodoFromVmToApi = (todo: vm.TodoVm): apiModel.TodoModel => ({
  ...todo
});