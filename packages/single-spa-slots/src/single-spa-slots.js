import { mountRootParcel } from 'single-spa'

const slots = {}

export function createSlot(name, domNode) {
    if (slots[name]) {
        throw new Error(`Slot by name of ${name} already exists`)
    }
    //TODO ensure it's a domNode
    slots[name] = domNode
    return () => removeSlot(name)
}

export function removeSlot(name) {
    delete slots[name]
}

export function fillSlot(name, parcelConfig, props = {}) {
    if (!slots[name]) {
        throw new Error(`Slot by name of ${name} doesn't exist`)
    }
    const parcelProps = Object.assign({}, {
        domElement: slots[name]
    }, props)
    // TODO ensure the domNode exists
    return mountRootParcel(parcelConfig, parcelProps)
}