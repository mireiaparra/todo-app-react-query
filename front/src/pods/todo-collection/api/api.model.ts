import { z } from 'zod';

export const todoApiSchema = z.object({
  id: z.number(),
  description: z.string(),
  isDone: z.boolean(),
});

export const todoApiCollection = z.array(todoApiSchema);

export type TodoModel = z.infer<typeof todoApiSchema>;