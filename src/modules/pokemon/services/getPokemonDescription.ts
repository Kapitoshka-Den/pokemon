import { useFetchData } from '@/core/composables/useFetchData'
import { computed } from 'vue'

type Description = {
  choices: { message: { content: string } }[]
}

export function getPokemonDescription(pokemonName: string) {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_ZHIPU_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'glm-4',
      messages: [{ role: 'user', content: 'Describe this pokemon: ' + pokemonName + '.' }],
    }),
  }

  const data = useFetchData<Description>(
    'https://open.bigmodel.cn/api/paas/v4/chat/completions',
    options,
  )

  const description = computed(() => data.data.value?.choices[0].message.content)

  return { ...data, data: description }
}

//70191b0034be4c4eafb494930380acdc.zX7Sr09XVuIMGHpJ
