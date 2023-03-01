export type ConvertNullableToUndefined<T extends Record<never, never>> = {
    [K in keyof T]: T[K] extends NonNullable<T[K]> ? T[K] : NonNullable<T[K]> | undefined;
};
