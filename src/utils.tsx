// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const consoleLog = (isDebug: boolean, tag: string, ...args: any[]) => {
  if (isDebug) console.log(`${tag}`, ...args)
}
