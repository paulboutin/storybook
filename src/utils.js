export function slugify(string) {
  return string
    .replace(/[^\w\s-]/g, '')
    .replace(/\s/g, '-')
    .toLowerCase()
}

export function prefixImagePath({ prefix, src }) {
  return [prefix.replace(/\/$/, ''), src.replace(/^\//, '')].join('/')
}
