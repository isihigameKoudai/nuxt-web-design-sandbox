<template>
  <div class="index-page">
    <h1 class="title">web-design-sandbox</h1>
    <h2 class="sub-title">CREATIVE</h2>
    <ul class="container">
      <li v-for="(item, i) in creativeMenu" :key="i" class="list-item box">
        <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
      </li>
    </ul>
    <h2 class="sub-title">SANDBOX</h2>
    <ul class="container">
      <li v-for="(item, i) in sandBoxMenu" :key="i" class="list-item box">
        <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  setup(_, context) {
    const routes = context.root.$router.options.routes || []

    const creativeMenu = computed(() =>
      routes.filter((item) => item.name?.includes('creative'))
    )
    const sandBoxMenu = computed(() =>
      routes.filter((item) => !item.name?.includes('creative'))
    )

    return {
      sandBoxMenu,
      creativeMenu,
    }
  },
})
</script>

<style lang="scss" scoped>
.title {
  font-size: 4.8rem;
  padding: 1rem 0;
}

.sub-title {
  font-size: 3.2rem;
  padding: 0.8rem 0;
}

.index-page {
  width: 960px;
  height: auto;
  margin: 0 auto;
  padding-top: 42px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 0 100px;

  .list-item {
    width: 100%;
    height: auto;
    border: solid 1px #888;
    margin: 10px 0 0 0;
    padding: 10px;
    overflow: hidden;
    box-sizing: border-box;
    letter-spacing: 1.4px;
    color: #222;
    text-decoration: none;
    font-size: 24px;
    word-break: break-all;
    font-family: 'Lato', sans-serif;
    font-feature-settings: 'palt';
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    transition-duration: 0.3s;

    &.box {
      width: 150px;
      height: 150px;
    }

    &:hover {
      filter: drop-shadow(3px 3px 3px #aaa);
    }
  }
}
</style>
