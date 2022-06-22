export abstract class CClientStorage {
  abstract setItem: (key: string, value: string) => Promise<void>

  abstract getItem: (key: string) => Promise<string | null>
}