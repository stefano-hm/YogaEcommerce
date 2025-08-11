import { Buffer } from 'buffer'

declare global {
  var Buffer: typeof Buffer
  interface GlobalThis {
    Buffer: typeof Buffer
  }
}
