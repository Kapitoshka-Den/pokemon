import { describe, expect, it } from 'vitest'
import { getId } from './getId'

describe('getId', () => {
  it('тестирование получения id из предпоследней секции url', () => {
    expect(getId('https://example.com/api/v1/resource/12345/')).toBe('12345')
  })

  it('тестирование получения id из последней секции url', () => {
    expect(getId('https://example.com/api/v1/resource/12345')).toBe('12345')
  })
})
