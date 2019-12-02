<template>
  <section class="container">
    <div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  async mounted() {
    console.log(
      JSON.stringify(await this.$axios.$get('https://qiita.com/api/v2/items?query=tag:nuxt.js'), true, ' ')
    )
  },
  components: {
    AppLogo
  }
}
</script>

<style>
</style>

