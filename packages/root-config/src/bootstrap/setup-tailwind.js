import { setup, strict } from 'twind'
export default function setupTailwind() {
  return Promise.resolve().then(() => {
    setup({
      mode: strict,
      theme: {
        fontFamily: {
          sans: ['Helvetica', 'sans-serif'],
          serif: ['Times', 'serif'],
        },
      },
    })
    return Promise.resolve()
  })
}
