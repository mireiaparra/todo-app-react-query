interface EnvVariables {
  TODO_API_BASE_URL: string;
}

export const ENV_VARIABLES: EnvVariables = {
  TODO_API_BASE_URL: import.meta.env.VITE_TODO_API_BASE_URL,
};
