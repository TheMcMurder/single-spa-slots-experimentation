import { mountRootParcel } from 'single-spa'
import { generateError } from './error-generate.js'

const slots = {}

export function getNamedNode(name) {
  const selector = slots[name]
  if (!selector) {
    return undefined
  } else {
    return document.querySelector(selector) || undefined
  }
}

// expect a mapping of names to dom querySelectors
export function createSlots(config = {}) {
  Object.entries(config).forEach(([key, value]) => {
    if (slots[key]) {
      const error = generateError(`Slot by name of ${key} already exists`)
      throw error
    }
    slots[key] = value
  })
}

// export function createSlot(name, domNode) {
//     slots[name] = domNode
//     return () => removeSlot(name)
// }

// export function removeSlot(name) {
//     delete slots[name]
// }

export function fillSlot(name, parcelConfig, props = {}) {
  if (!slots[name]) {
    const error = generateError(`Slot by name of ${name} doesn't exist`)
    throw error
  }
  const domElement = document.querySelector(slots[name])
  if (!domElement) {
    const error = generateError(
      `cannot find dom node with querySelector: ${slots[name]}`,
    )
    throw error
  }
  const parcelProps = Object.assign(
    {},
    {
      domElement,
    },
    props,
  )
  // todo use mouteParcel instead
  return mountRootParcel(parcelConfig, parcelProps)
}
