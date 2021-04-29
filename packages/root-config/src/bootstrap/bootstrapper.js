import bootstrapTailwind from './setup-tailwind.js'
export default function BootstrapSpa() {
  return Promise.all([bootstrapTailwind()])
}
