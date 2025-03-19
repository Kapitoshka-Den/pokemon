import { computed, ref, toValue, watchEffect } from 'vue'

type Url = `${'http://' | 'https://'}${string}${string}` | URL

export function useFetchData<TResponse>(url: Url) {
  const data = ref<TResponse | null>(null)
  const error = ref<unknown | null>(null)
  const isLoading = ref(false)
  const isSuccess = ref(false)
  const isError = computed(() => error.value !== null)

  const fetchData = () => {
    isLoading.value = true
    fetch(toValue(url))
      .then((res) => {
        isSuccess.value = res.ok
        return res.json()
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
