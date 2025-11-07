export function getId(url: string) {
  const splittingUrl = url.split('/')
  if (splittingUrl[splittingUrl.length - 1]) {
    return splittingUrl[splittingUrl.length - 1]
  } else {
    return splittingUrl[splittingUrl.length - 2]
  }
}
