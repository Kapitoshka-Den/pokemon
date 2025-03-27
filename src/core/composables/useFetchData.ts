import type { Url } from '@/core/types/url'
import { jsonToCamelCase } from '@/core/utils/jsonToCamelCase'
import { computed, ref, toValue, watchEffect, type Ref } from 'vue'

export function useFetchData<TResponse>(url: Url | Ref<Url, Url>, options?: RequestInit) {
  const data = ref<TResponse | null>(null)
  const error = ref<unknown | null>(null)
  const isLoading = ref(false)
  const isSuccess = ref(false)
  const isError = computed(() => error.value !== null)

  const fetchData = () => {
    isLoading.value = true
    fetch(toValue(url), options)
      .then(async (res) => {
        isSuccess.value = res.ok
        return await jsonToCamelCase(res)
      })
      .then((res) => (data.value = res as TResponse))
      .catch((err) => (error.value = err))
      .finally(() => (isLoading.value = false))
  }

  watchEffect(fetchData)

  return {
    data,
    error,
    isError,
    isSuccess,
    isLoading,
  }
}
