export function slugify(string) {
  return string
    .replace(/[^\w\s]/g, '')
    .replace(/\s/g, '-')
    .toLowerCase()
}
