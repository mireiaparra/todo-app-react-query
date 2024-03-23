const todoModule = 'todo';

export const todoKeys = {
  all: [todoModule] as const,
  todoCollection: () => [...todoKeys.all, 'collection'] as const,
}