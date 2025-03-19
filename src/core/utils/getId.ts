export function getId(url: string): string {
  const splittingUrl = url.split('/')
  return splittingUrl[splittingUrl.length - 2]
}
