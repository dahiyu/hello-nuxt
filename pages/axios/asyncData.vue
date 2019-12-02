<template>
  <section class="container">
    <div>
      <h3>Nuxt.jsのタグがつけられた投稿の一覧</h3>
      <ul>
        <li v-for="item in items" :key="item.id">
          <h4>
            <span>{{item.title}}</span>
            <small>by {{item.user.id}}</small>
          </h4>
          <div>{{item.body.slice(0, 130)}}</div>
          <p><a :href="item.url">{{item.url}}</a></p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  async asyncData({app}) {
    const items = await app.$axios.$get('https://qiita.com/api/v2/items?query=tag:nuxt.js')
     return { items }
  },
  components: {
    AppLogo
  }
}
</script>

<style>
</style>

