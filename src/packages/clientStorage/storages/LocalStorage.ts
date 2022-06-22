import { CClientStorage } from './CClientStorage'

class LocalStorage extends CClientStorage {
  setItem = (key: string, value: string) => new Promise<void>(resolve => {
    localStorage.setItem(key, value)
    resolve()
  })

  getItem = (key: string) => new Promise<string | null>(resolve => {
    resolve(localStorage.getItem(key))
  })
}

export default new LocalStorage()