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
