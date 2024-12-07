export function useDebounceFn<T extends (...args: any[]) => any>(
  fn: T,
  wait: number
) {
  let timeout: NodeJS.Timeout;

  return function executedFunction(
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}
