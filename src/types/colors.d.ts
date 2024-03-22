export interface Colors {
  /* err: A record is preferred over an index signature. eslint(@typescript-eslint/consistent-indexed-object-style) */
  // red: { [key: number]: string }
  red: Record<number, string>
  yellow: Record<number, string>
  stone: Record<number, string>
  gray: Record<number, string>
}
