export async function jsonToCamelCase(res: Response) {
  const text = await res.text()
  return JSON.parse(text.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase()))
}
