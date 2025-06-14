<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()
    const route = useRoute()

    const search = computed({
      get() {
        return route.query.search ?? ''
      },
      set(search) {
        router.replace({ query: { search } })
      }
    })

    return { search }
  }
}
</script>

<template>
  <h2>AboutView</h2>
  <label>
    Search: <input v-model.trim="search" maxlength="28">
  </label>
</template>