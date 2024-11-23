export type Union<T extends readonly string[]> = T[number] & PropertyKey;
