export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const newObj = {} as Pick<T, K>;

  for (const key of keys) {
    newObj[key] = obj[key];
  }

  return newObj;
}

export function filter<T>(
  obj: T,
  condition: (value: T[keyof T]) => boolean
): Partial<T> {
  const newObj = {} as Partial<T>;

  for (const key in obj) {
    if (condition(obj[key])) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

export function isEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0;
}
