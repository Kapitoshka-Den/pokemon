import { describe } from 'vitest'
import { jsonToCamelCase } from './jsonToCamelCase'
import { expect, it } from 'vitest'

const testJsonSneakCase: string = `{
            "ability": {
                "name": "overgrow",
                "url": "https://pokeapi.co/api/v2/ability/65/"
            },
            "is_hidden": false,
            "slot": 1
        }`

const testJsonCamelCase = {
  ability: {
    name: 'overgrow',
    url: 'https://pokeapi.co/api/v2/ability/65/',
  },
  isHidden: false,
  slot: 1,
}

describe('jsonToCamelCase', () => {
  it('тестирование преобразования snake_case в camelCase', async () => {
    const result = await jsonToCamelCase(new Response(testJsonSneakCase))
    expect(result).toEqual(testJsonCamelCase)
  })
})
