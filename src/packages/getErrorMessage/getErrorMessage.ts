export const getErrorMessage = (e: unknown): string => {
  return (e as Error).message ?? e
}