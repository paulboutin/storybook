export function debounce(fn, delay) {
  let timeout

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      fn(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, delay)
  }
}
